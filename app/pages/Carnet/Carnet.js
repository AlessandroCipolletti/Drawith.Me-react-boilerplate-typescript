import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { injectIntl, intlShape } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import Theme from 'common/Theme'
import PageContainer from 'containers/PageContainer'
import TextButton from 'common/styled/TextButton'
import IconButton from 'common/components/IconButton'
import DrawingsPreview from './components/DrawingsPreview'
import NewDrawing from './components/DrawingsPreview/NewDrawing'
import { Wrapper, Toolbar, Content } from './styled'

import {
  makeSelectCarnetDrawings,
  makeSelectCarnetLoading,
} from './selectors'
import {
  requestLocalDrawingsAction,
  toggleDrawingSelectionAction,
  deleteSelectedDrawingsAction,
  exportSelectedDrawingsAction,
  deselectAllDrawingsAction,
} from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

function Carnet({
  intl, drawings, isLoading,
  requestLocalDrawings, toggleDrawingSelection, deleteSelectedDrawings,
  exportSelectedDrawings, deselectAllDrawings,
}) {
  useInjectReducer({ key: 'carnet', reducer })
  useInjectSaga({ key: 'carnet', saga })

  // init local drawings from indexDB
  React.useEffect(() => {
    requestLocalDrawings()
  }, [])

  // action buttons state
  const [selectMode, setSelectMode] = React.useState(false)
  const [actionButtonsEnabled, setActionButtonsEnabled] = React.useState(true)
  const toggleSelectMode = React.useCallback(() => {
    setSelectMode(!selectMode)
  }, [selectMode])

  // auto enable/disable action buttons when needed
  React.useEffect(() => {
    if (!drawings.length) {
      setSelectMode(false)
      setActionButtonsEnabled(true)
    } else {
      setActionButtonsEnabled(drawings.filter(d => d.selected).length === 0)
    }
  }, [drawings])

  // dynamic click handler to select or open a drawing
  const drawingClick = React.useCallback(id => {
    if (selectMode) {
      toggleDrawingSelection(id)
    } else {
      // TODO open editor draw
    }
  }, [selectMode])

  // auto deselect all drawing on 'done' click
  React.useEffect(() => {
    if (!selectMode && drawings.filter(d => d.selected).length) {
      deselectAllDrawings()
    }
  }, [selectMode])

  // click handler for delete icon, with current selected drawings ids
  const deleteIconClick = React.useCallback(() => {
    deleteSelectedDrawings(drawings.filter(d => d.selected).map(d => d.id))
  }, [drawings])

  // click handler for export icon, with current selected drawings ids
  const exportIconClick = React.useCallback(() => {
    exportSelectedDrawings(drawings.filter(d => d.selected).map(d => d.id))
  }, [drawings])

  const headerButtons = [
    // {
    //   id:'info-btn',
    //   icon: 'info',
    //   float: 'left',
    //   action: ()=>{},
    // }
  ]

  console.log({ isLoading })

  return (
    <PageContainer
      name={intl.formatMessage(messages.pageName)}
      headerButtons={headerButtons}
    >
      <Wrapper>
        <Toolbar>
          <TextButton disabled={!drawings.length} onClick={toggleSelectMode}>
            {selectMode ? intl.formatMessage(messages.done) : intl.formatMessage(messages.select) }
          </TextButton>
          <IconButton
            color={Theme.palette.gray[9]}
            onClick={deleteIconClick}
            icon='delete'
            disabled={actionButtonsEnabled}
          />
          <IconButton
            color={Theme.palette.gray[9]}
            onClick={exportIconClick}
            icon='export'
            disabled={actionButtonsEnabled}
          />
        </Toolbar>
        <Content>
          <NewDrawing selectMode={selectMode} />
          {drawings.map(drawing => (
            <DrawingsPreview
              key={drawing.id}
              id={drawing.id}
              drawing={drawing.previewPath}
              selectMode={selectMode}
              selected={drawing.selected}
              draft={false}
              onClick={drawingClick}
            />
          ))}
        </Content>
      </Wrapper>
    </PageContainer>
  )
}

Carnet.propTypes = {
  intl: intlShape.isRequired,
  drawings: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requestLocalDrawings: PropTypes.func.isRequired,
  toggleDrawingSelection: PropTypes.func.isRequired,
  deleteSelectedDrawings: PropTypes.func.isRequired,
  exportSelectedDrawings: PropTypes.func.isRequired,
  deselectAllDrawings: PropTypes.func.isRequired,
}

export const mapStateToProps = createStructuredSelector({
  drawings: makeSelectCarnetDrawings(),
  isLoading: makeSelectCarnetLoading(),
})

export function mapDispatchToProps(dispatch) {
  return {
    requestLocalDrawings: () => dispatch(requestLocalDrawingsAction()),
    toggleDrawingSelection: (id) => dispatch(toggleDrawingSelectionAction(id)),
    deleteSelectedDrawings: (ids) => dispatch(deleteSelectedDrawingsAction(ids)),
    exportSelectedDrawings: (ids) => dispatch(exportSelectedDrawingsAction(ids)),
    deselectAllDrawings: () => dispatch(deselectAllDrawingsAction()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  injectIntl,
)(Carnet)

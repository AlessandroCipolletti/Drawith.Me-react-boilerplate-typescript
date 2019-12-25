import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { injectIntl, intlShape } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import PageContainer from 'containers/PageContainer'
import TextButton from 'common/styled/TextButton'
import DrawingsPreview from './components/DrawingsPreview'
import NewDrawing from './components/DrawingsPreview/NewDrawing'
import { Wrapper, Toolbar, Content } from './styled'

import {
  makeSelectCarnetDrawings,
  makeSelectCarnetLoading,
} from './selectors'
import {
  requestLocalDrawingsAction,
} from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

function Carnet({
  intl, drawings, isLoading,
  requestLocalDrawings,
}) {
  useInjectReducer({ key: 'carnet', reducer })
  useInjectSaga({ key: 'carnet', saga })

  React.useEffect(() => {
    requestLocalDrawings()
  }, [])

  const [selectMode, setSelectMode] = React.useState(false)
  const toggleSelectMode = React.useCallback(() => {
    setSelectMode(!selectMode)
  }, [selectMode])

  console.log({ isLoading })

  const headerButtons = [
    // {
    //   id:'info-btn',
    //   icon: 'info',
    //   float: 'left',
    //   action: ()=>{},
    // }
  ]

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
        </Toolbar>
        <Content>
          <NewDrawing selectMode={selectMode} />
          {drawings.map(drawing => (
            <DrawingsPreview
              key={drawing.id}
              drawing={drawing.previewPath}
              selectMode={selectMode}
              selected={false}
              draft={false}
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
}

export const mapStateToProps = createStructuredSelector({
  drawings: makeSelectCarnetDrawings(),
  isLoading: makeSelectCarnetLoading(),
})

export function mapDispatchToProps(dispatch) {
  return {
    requestLocalDrawings: () => dispatch(requestLocalDrawingsAction()),
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

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
import { Wrapper, Toolbar, Content } from './styled'

import {
  makeSelectFolderDrawings,
  makeSelectFolderLoading,
} from './selectors'
import {
  requestLocalDrawingsAction,
} from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function Folder({
  intl, drawings, isLoading,
  requestLocalDrawings,
}) {
  useInjectReducer({ key: 'folder', reducer })
  useInjectSaga({ key: 'folder', saga })

  React.useEffect(() => {
    requestLocalDrawings()
  }, [])

  console.log({ drawings })
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
          <TextButton>
            {intl.formatMessage(messages.select)}
          </TextButton>
        </Toolbar>
        <Content>

        </Content>
      </Wrapper>
    </PageContainer>
  )
}

Folder.propTypes = {
  intl: intlShape.isRequired,
  drawings: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requestLocalDrawings: PropTypes.func.isRequired,
}

export const mapStateToProps = createStructuredSelector({
  drawings: makeSelectFolderDrawings(),
  isLoading: makeSelectFolderLoading(),
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
)(Folder)

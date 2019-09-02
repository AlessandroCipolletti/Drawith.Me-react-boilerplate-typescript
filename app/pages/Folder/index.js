import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectFolder from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function Folder() {
  useInjectReducer({ key: 'folder', reducer })
  useInjectSaga({ key: 'folder', saga })

  return (
    <div>
      <Helmet>
        <title>Folder</title>
        <meta name="description" content="Description of Folder" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

Folder.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  folder: makeSelectFolder(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Folder)

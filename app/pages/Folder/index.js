import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import Popup from 'components/Popup'

import { makeSelectFolderKey } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function Folder() {
  useInjectReducer({ key: 'folder', reducer })
  useInjectSaga({ key: 'folder', saga })

  const [showPopup, setShowPopup] = useState(true)

  const hidePopup = () => {
    setShowPopup(false)
  }

  return (
    <div>
      <Helmet>
        <title>Folder</title>
        <meta name="description" content="Description of Folder" />
      </Helmet>
      <FormattedMessage {...messages.header} />

      {showPopup && <Popup
        callback={hidePopup}
      />}
    </div>
  )
}

Folder.propTypes = {}

const mapStateToProps = createStructuredSelector({
  folderKey: makeSelectFolderKey(),
})

function mapDispatchToProps() {
  return {}
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Folder)

import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import PageContainer from 'containers/PageContainer'
import Popup from 'common/components/Popup'

import { makeSelectFolderKey } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function Folder({
  intl,
}) {
  useInjectReducer({ key: 'folder', reducer })
  useInjectSaga({ key: 'folder', saga })

  const [showPopup, setShowPopup] = useState(true)

  const hidePopup = () => {
    setShowPopup(false)
  }

  return (
    <PageContainer name={intl.formatMessage(messages.pageName)} >
      <FormattedMessage {...messages.header} />

      {showPopup && <Popup
        callback={hidePopup}
      >
        CIAO CIAO
      </Popup>}
    </PageContainer>
  )
}

Folder.propTypes = {
  intl: intlShape.isRequired,
}

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

export default compose(
  withConnect,
  injectIntl,
)(Folder)

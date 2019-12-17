import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Helmet } from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'

import messages from './messages'

import { Wrapper, PageContent } from './styled'
// import { InfoPopup, AppHeader } from './components'
import InfoPopup from './components/InfoPopup'
import AppHeader from './components/AppHeader'

const PageContainer = ({
  name, headerButtons = [], children, intl,
}) => {
  const [infoPopupVisible, setInfoPopupVisible] = React.useState(false)
  const showInfoPopup = React.useCallback(() => {
    setInfoPopupVisible(true)
  }, [])
  const hideInfoPopup = React.useCallback(() => {
    setInfoPopupVisible(false)
  }, [])

  return (
    <div>
      <Helmet>
        <title>{name} - {intl.formatMessage(messages.appName)}</title>
        <meta name="description" content={intl.formatMessage(messages.appDescription)} />
      </Helmet>
      {infoPopupVisible && <InfoPopup callback={hideInfoPopup} />}
      <Wrapper>
        <AppHeader
          headerButtons={headerButtons}
          showInfoPopup={showInfoPopup}
        />
        <PageContent>
          {children}
        </PageContent>
      </Wrapper>
    </div>
  )
}

PageContainer.propTypes = {
  name: PropTypes.string.isRequired,
  headerButtons: PropTypes.array,
  children: PropTypes.any.isRequired,
  intl: intlShape.isRequired,
}

export default compose(
  injectIntl,
)(PageContainer)

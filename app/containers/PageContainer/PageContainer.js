import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Helmet } from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'

import messages from './messages'

import { Wrapper, AppHeader, PageContent } from './styled'
// import { InfoButton, InfoPopup } from './components'
import InfoButton from './components/InfoButton'
import InfoPopup from './components/InfoPopup'

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
        <AppHeader>
          {headerButtons.map(button => (
            <AppHeader.Button
              {...button}
              onClick={button.action}
            >
              {button.text || ''}
            </AppHeader.Button>
          ))}
          <InfoButton action={showInfoPopup} />
        </AppHeader>
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

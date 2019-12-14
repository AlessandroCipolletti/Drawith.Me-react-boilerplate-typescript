import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Helmet } from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'

import messages from './messages'

export function PageContainer({
  name, children, intl,
}) {
  return (
    <div>
      <Helmet>
        <title>{name} - {intl.formatMessage(messages.appName)}</title>
        <meta name="description" content={intl.formatMessage(messages.appDescription)} />
      </Helmet>
      {children}
    </div>
  )
}

PageContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  intl: intlShape.isRequired,
}

export default compose(
  injectIntl,
)(PageContainer)

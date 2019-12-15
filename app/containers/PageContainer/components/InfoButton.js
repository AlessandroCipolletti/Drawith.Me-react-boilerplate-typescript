import React from 'react'
import PropTypes from 'prop-types'
import Theme from 'common/Theme'

import Icon from 'common/components/Icon'
import { AppHeader } from '../styled'

const InfoButton = ({
  action,
}) => (
  <AppHeader.Button float='right'>
    <Icon
      name='info'
      size={Theme.spacing.size6}
      onClick={action}
    />
  </AppHeader.Button>
)

InfoButton.propTypes = {
  action: PropTypes.func.isRequired,
}

export default InfoButton

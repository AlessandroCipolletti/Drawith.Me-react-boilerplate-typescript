import React from 'react'
import PropTypes from 'prop-types'
import Theme from 'common/Theme'

import Icon from 'common/components/Icon'
import { HeaderButton } from '../styled'

const InfoButton = ({
  action,
}) => (
  <HeaderButton
    float='right'
    onClick={action}
  >
    <Icon
      name='info'
      size={Theme.spacing.size6}
    />
  </HeaderButton>
)

InfoButton.propTypes = {
  action: PropTypes.func.isRequired,
}

export default InfoButton

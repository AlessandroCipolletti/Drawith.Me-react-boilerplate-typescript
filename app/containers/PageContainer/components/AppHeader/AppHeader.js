import React from 'react'
import PropTypes from 'prop-types'
import Theme from 'common/Theme'

import Icon from 'common/components/Icon'
import { Wrapper, HeaderButton } from './styled'
import { InfoButton } from './components'

const AppHeader = ({
  headerButtons = [], showInfoPopup,
}) => (
  <Wrapper>
    {headerButtons.map(button => (
      <HeaderButton
        key={button.id}
        float={button.float}
        onClick={button.action}
        className='HeaderButton'
      >
        {button.icon && <Icon
          name={button.icon}
          size={Theme.spacing.size6}
        />}
        {button.text || ''}
      </HeaderButton>
    ))}
    <InfoButton action={showInfoPopup} />
  </Wrapper>
)

AppHeader.propTypes = {
  headerButtons: PropTypes.array,
  showInfoPopup: PropTypes.func.isRequired,
}

export default AppHeader

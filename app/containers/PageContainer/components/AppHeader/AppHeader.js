import React from 'react'
import PropTypes from 'prop-types'
import Theme from 'common/Theme'

import IconButton from 'common/components/IconButton'
import TextButton from 'common/styled/TextButton'
import { Wrapper } from './styled'

const AppHeader = ({
  headerButtons = [], showInfoPopup,
}) => (
  <Wrapper>
    {headerButtons.map(button => (
      <>
        {button.icon && (
          <IconButton
            key={button.id}
            float={button.float}
            onClick={button.action}
            color={Theme.palette.white}
            icon={button.icon}
          />
        )}
        {button.text && (
          <TextButton
            key={button.id}
            float={button.float}
            onClick={button.action}
            color={Theme.palette.blue[4]}
            data-testid="TextButton"
          >
            {button.text}
          </TextButton>
        )}
      </>
    ))}
    <IconButton
      float='right'
      color={Theme.palette.white}
      onClick={showInfoPopup}
      icon='info'
    />
  </Wrapper>
)

AppHeader.propTypes = {
  headerButtons: PropTypes.array,
  showInfoPopup: PropTypes.func.isRequired,
}

export default AppHeader

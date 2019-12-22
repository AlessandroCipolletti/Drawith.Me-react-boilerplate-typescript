import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from 'common/Theme'

import Icon from 'common/components/Icon'

const IconButton = ({
  onClick = () => {},
  disabled = false,
  color = Theme.palette.gray[9],
  float = 'none',
  icon,
}) => (
  <Wrapper
    float={float}
    disabled={disabled}
    onClick={!disabled ? onClick : () => {}}
    data-testid="IconButton"
  >
    <Icon
      name={icon}
      color={color}
      size={Theme.spacing.size6}
    />
  </Wrapper>
)

IconButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  float: PropTypes.oneOf(['right', 'left']),
  icon: PropTypes.string.isRequired,
}

export default IconButton

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.spacing.size7};
  height: ${({ theme }) => theme.spacing.size7};
  float: ${props => props.float};
  box-sizing: border-box;
  padding: 6px;
  cursor: ${props => props.disabled ? 'auto' : 'pointer' };
  opacity: ${props => props.disabled ? 0.6 : 1 };
`

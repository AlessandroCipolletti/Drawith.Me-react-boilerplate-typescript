import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from 'common/Theme'

const DEFAULT_ICON_SIZE = Theme.spacing.size4
const DEFAULT_ICON_COLOR = Theme.palette.gray[0]

const Icon = ({
  name, size = DEFAULT_ICON_SIZE, color = DEFAULT_ICON_COLOR, disabled = false, onClick,
}) => {
  const [iconElement, setIconElement] = React.useState('')
  React.useEffect(() => {
    setIconElement(require(`images/icons/${name}.png`)) // eslint-disable-line global-require
  }, [name])

  size = parseInt(size)

  return (
    <Wrapper
      icon={iconElement || ''}
      color={color}
      size={size}
      disabled={disabled}
      clickable={!disabled && !!onClick}
      onClick={!disabled && !!onClick ? onClick : () => {}}
      role="button"
      tabIndex={0}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(Object.values(Theme.spacing)),
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Icon

const Wrapper = styled.div`
  margin: 2px;
  width: ${props => `${props.size  }px`};
  height: ${props => `${props.size  }px`};
  user-select: none;
  cursor: ${props => props.clickable ? 'pointer' : 'auto'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  background-image: url(${props => props.icon});
  background-size: ${props => `${props.size - 4  }px`} ${props => `${props.size - 4  }px`};
  background-repeat: no-repeat;
  background-position: center;
`

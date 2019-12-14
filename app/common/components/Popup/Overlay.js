import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${props => props.theme.UIColors.overlayBackgroundColor};
`

Overlay.defaultProps = {
  theme: {
    UIColors: {
      overlayBackgroundColor: 'transparent',
    },
  },
}

export default Overlay

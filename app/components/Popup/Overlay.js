import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${props => props.theme.UIColors.popupBackgroundColor};
`

Overlay.defaultProps = {
  theme: {
    UIColors: {
      popupBackgroundColor: 'transparent',
    },
  },
}

export default Overlay

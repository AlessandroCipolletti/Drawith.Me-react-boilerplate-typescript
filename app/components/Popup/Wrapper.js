import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  max-width: 90%;
  max-height: 90%;
  min-width: 100px;
  min-height: 100px;
  overflow: auto;
  transform: translate3d(-50%, -50%, 0px);
  padding: ${props => props.theme.spacing.s};
  border-radius: ${props => props.theme.spacing.xxs};
  z-index: 1050;
  background-color: ${props => props.theme.palette.whiteColor};
`

Wrapper.defaultProps = {
  theme: {
    palette: {
      whiteColor: 'white',
    },
    spacing: {
      xxs: '8px',
      s: '24px',
    },
  },
}

export default Wrapper

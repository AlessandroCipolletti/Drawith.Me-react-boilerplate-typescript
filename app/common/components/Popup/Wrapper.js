import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  max-width: 90%;
  max-height: 90%;
  min-width: ${props => props.theme.spacing.size12};
  min-height: ${props => props.theme.spacing.size12};
  overflow: auto;
  transform: translate3d(-50%, -50%, 0px);
  padding: ${props => props.theme.spacing.size5};
  border-radius: ${props => props.theme.spacing.size2};
  z-index: 1050;
  background-color: ${props => props.theme.palette.gray[9]};
`

Wrapper.defaultProps = {
  theme: {
    palette: {
      gray: {
        9: 'white',
      },
    },
    spacing: {
      size2: '8px',
      size5: '24px',
      size12: '256px',
    },
  },
}

export default Wrapper

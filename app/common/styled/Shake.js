import styled, { css, keyframes } from 'styled-components'

const maxPx = 4

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(${-maxPx / 4}px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(${maxPx / 2}px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(${-maxPx}px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(${maxPx}px, 0, 0);
  }
`

const Shake = styled.div`
  animation: ${props => props.isShaking ? css`${shakeAnimation} ${props.theme.timing.shakeAnimation} ease-in-out 0s infinite` : ''};
  perspective: 1000px;
`

export default Shake

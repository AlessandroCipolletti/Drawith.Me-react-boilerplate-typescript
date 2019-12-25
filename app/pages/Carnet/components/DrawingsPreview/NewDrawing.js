import styled from 'styled-components'


import newImg from 'images/UI/Carnet/new.png'
import paper from 'images/papers/white.png'
import { DrawingCss } from './styled'

const NewDrawing = styled.div`
  ${DrawingCss}
  background: url(${newImg}) no-repeat center, url(${paper});
  background-size: 45%, auto;
  opacity: ${props => props.selectMode ? 0.3 : 1};
  cursor: ${props => props.selectMode ? 'auto' : 'pointer'};
`

export default NewDrawing

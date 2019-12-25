import styled from 'styled-components'

const TextButton = styled.button`
  width: auto;
  min-width: ${({ theme }) => theme.spacing.size9};
  height: ${({ theme }) => theme.spacing.size7};
  float: ${props => props.float || 'left'};
  box-sizing: border-box;
  color: ${props => props.color || props.theme.palette.blue[4]};
  font-size: ${props => props.theme.fontSizing.size4};
  letter-spacing: 1px;
  font-family: sans-serif;
  line-height: ${({ theme }) => theme.spacing.size7};
  cursor: ${props => props.disabled ? 'auto' : 'pointer' };
  border: none;
  background: none;
  opacity: ${props => props.disabled ? 0.5 : 1 };
`

export default TextButton

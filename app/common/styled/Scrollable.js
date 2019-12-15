import styled, { css } from 'styled-components'

export const ScrollableCss = css`
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: ${props => props.theme.spacing.size2};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.palette.gray[5]};
    border-radius: ${props => props.theme.spacing.size2};
  }
`

export const Scrollable = styled.div`
  ${ScrollableCss}
`

export default Scrollable

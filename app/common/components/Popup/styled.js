import styled from 'styled-components'
import { parseColorHexToRgbaString } from 'common/utils/'

import { SoftShadow } from 'common/styled/Shadows'

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 600;
  opacity: ${props => props['data-visible'] ? 1 : 0};
  transition-duration: ${props => props.theme.timing.fadeAnimation.string};
  background-color: ${props => props.theme.UIColors.overlayBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled(SoftShadow)`
  max-width: 90vw;
  max-height: 90vh;
  min-width: ${props => props.theme.spacing.size11};
  min-height: ${props => props.theme.spacing.size11};
  overflow: auto;
  border-radius: ${props => props.theme.spacing.size1};
  z-index: 650;
  background-color: ${props => props.theme.palette.gray[9]};
  & > *:first-child {
    max-width: 90vw;
    max-height: 90vh;
  }
`

Wrapper.CloseButton = styled.div`
  position: absolute;
  right: ${props => `-${props.theme.spacing.size3}`};
  top: ${props => `-${props.theme.spacing.size3}`};
  background-color: ${props => props.theme.palette.white};
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background: ${props => parseColorHexToRgbaString(props.theme.palette.gray[1], 0.5)};
  }
`

export const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${props => props.theme.spacing.size8};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px ${props => props.theme.spacing.size5} ;
  background: ${props => props.theme.gradients.primaryColorLight};
`

Header.Title = styled.span`
  color: ${props => props.theme.palette.gray[9]};
  font-size: ${props => props.theme.fontSizing.size5};
  user-select: none;
  font-weight: 600;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${props => props.theme.spacing.size8};
`

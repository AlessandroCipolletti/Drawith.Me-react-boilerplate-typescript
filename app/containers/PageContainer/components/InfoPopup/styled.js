import styled from 'styled-components'

import headerBG from 'images/UI/PageContainer/headerBG.png'
import logo from 'images/UI/PageContainer/logo.png'

export const Wrapper = styled.div`
  position: relative;
  width: ${props => props.theme.spacing.size15};
  height: ${props => props.theme.spacing.size15};
`

export const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${props => props.theme.spacing.size9};
  border-bottom: solid 1px ${props => props.theme.palette.gray[6]};
  background-image: url(${logo}), url(${headerBG});
  background-size: auto 90%, contain;
  background-repeat: no-repeat, repeat-x;
  background-position: center, 0% 0%;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.size4};
  padding-top: ${props => `${parseInt(props.theme.spacing.size9) + parseInt(props.theme.spacing.size4)}px`};
  text-align: center;
`

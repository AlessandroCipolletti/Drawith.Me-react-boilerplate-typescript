import styled from 'styled-components'
import Theme from 'common/Theme'

import headerBG from 'images/UI/PageContainer/headerBG.png'
import logo from 'images/UI/PageContainer/logo.png'

const headerHeight = Theme.spacing.size7

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

export const AppHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${headerHeight};
  border-bottom: solid 1px ${props => props.theme.palette.gray[6]};
  background-image: url(${logo}), url(${headerBG});
  background-size: auto 90%, contain;
  background-repeat: no-repeat, repeat-x;
  background-position: center, 0% 0%;
  z-index: 1000;
`

AppHeader.Button = styled.div`
  top: 0px;
  width: ${headerHeight};
  height: ${headerHeight};
  float: ${props => props.float || 'left'};
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.size1};
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSizing.size6};
  line-height: ${headerHeight};
  cursor: pointer;
`

export const PageContent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${headerHeight};
`

import styled from 'styled-components'

import headerBG from 'images/UI/PageContainer/headerBG.png'
import logo from 'images/UI/PageContainer/logo.png'

import HEADER_HEIGHT from '../../constants'

export const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${HEADER_HEIGHT};
  border-bottom: solid 1px ${props => props.theme.palette.gray[6]};
  background-image: url(${logo}), url(${headerBG});
  background-size: auto 90%, contain;
  background-repeat: no-repeat, repeat-x;
  background-position: center, 0% 0%;
  z-index: 1000;
`

export const HeaderButton = styled.div`
  top: 0px;
  width: ${HEADER_HEIGHT};
  height: ${HEADER_HEIGHT};
  float: ${props => props.float || 'left'};
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.size1};
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSizing.size6};
  line-height: ${HEADER_HEIGHT};
  cursor: pointer;
`

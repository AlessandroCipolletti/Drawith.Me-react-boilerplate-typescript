import styled from 'styled-components'

import headerBG from 'medias/images/UI/PageContainer/headerBG.png'
import logo from 'medias/images/UI/PageContainer/logo.png'

import HEADER_HEIGHT from 'common/constants'

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

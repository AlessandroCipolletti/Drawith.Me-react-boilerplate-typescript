import styled from 'styled-components'

import HEADER_HEIGHT from 'common/constants'

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

export const PageContent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT};
`

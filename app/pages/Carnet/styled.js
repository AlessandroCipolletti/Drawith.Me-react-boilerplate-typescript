import styled from 'styled-components'

import HEADER_HEIGHT from 'common/constants'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Toolbar = styled.div`
  position: absolute;
  width: 100%;
  height: ${HEADER_HEIGHT};
  top: 0px;
  left: 0px;
  border-bottom: solid 1px ${({ theme }) => theme.palette.gray[5]};
  box-sizing: border-box;
  padding: 0px ${({ theme }) => theme.spacing.size5};
  z-index: 100;
`

export const Content = styled.div`
  height: 100%;
  top: 0px;
  left: 0px;
  padding-top: ${HEADER_HEIGHT};
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  align-content: flex-start;
  justify-content: space-around;
  overflow: auto;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
`

import Config from 'common/Config'
import styled, { css } from 'styled-components'

import draftIcon from 'images/icons/draft.png'
import selectIcon from 'images/icons/select.png'
import paper from 'images/papers/white.png'

const DrawingCssPhone = css`
  @media (orientation: landscape) {
    width: 30vw;
    height: 35vh;
  }
  @media (orientation: portrait) {
    width: 44vw;
    height: 16vh;
  }
  margin: ${({ theme }) => theme.spacing.size2} 0px;
`

const DrawingCssTablet = css`
  @media (orientation: landscape) {
    width: 20vw;
    height: 18.5vh;
  }
  @media (orientation: portrait) {
    width: 29vw;
    height: 15vh;
  }
  margin: ${({ theme }) => theme.spacing.size4} 0px;
`

const DrawingCssDesktop = css`
  width: 18vw;
  height: 21vh;
  margin: ${({ theme }) => theme.spacing.size4} 0px;
`

export const DrawingCss = css`
  ${Config.isDesktop ? DrawingCssDesktop : ''}
  ${Config.isTablet ? DrawingCssTablet : ''}
  ${Config.isPhone ? DrawingCssPhone : ''}
  border: solid 1px rgb(220, 220, 220);
  border-radius: ${({ theme }) => theme.spacing.size2};
  box-shadow: inset 0px 0px ${({ theme }) => theme.spacing.size1} 1px rgba(220, 220, 220, 0.5);
  cursor: pointer;
`

export const Wrapper = styled.div`
  ${DrawingCss}
  background: url(${props => props.drawing}) no-repeat center, url(${paper});
  background-size: contain, auto;
`

export const DraftLabel = styled.div`
  position: relative;
  display: inline-block;
  top: 0px;
  left: 0px;
  width: ${({ theme }) => theme.spacing.size7};
  height: ${({ theme }) => theme.spacing.size7};
  border-radius: ${({ theme }) => theme.spacing.size2} 0px;
  border-right: solid 1px ${({ theme }) => theme.palette.gray[6]};
  border-bottom: solid 1px ${({ theme }) => theme.palette.gray[6]};
  background-color: ${({ theme }) => theme.palette.gray[8]};
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${draftIcon});
`

export const SelectLabel = styled.div`
  float: right;
  display: inline-block;
  top: 0px;
  right: 0px;
  margin: ${({ theme }) => theme.spacing.size2};
  height: ${({ theme }) => theme.spacing.size5};
  width: ${({ theme }) => theme.spacing.size5};
  border: solid 1px white;
  background-color: white;
  border-radius: 50%;
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  background-color: ${({ selected }) => selected ? 'rgb(25, 110, 225)' : 'none'};
  background-image: ${({ selected }) => selected ? `url(${selectIcon})` : 'none'};
`

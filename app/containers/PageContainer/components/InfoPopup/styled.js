import styled from 'styled-components'

import headerBG from 'images/UI/PageContainer/headerBG.png'
import logo from 'images/UI/PageContainer/logo.png'
import draw from 'images/draw.png'

export const Wrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing.size15};
  height: ${({ theme }) => theme.spacing.size16};
`

export const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${({ theme }) => theme.spacing.size9};
  border-bottom: solid 1px ${({ theme }) => theme.palette.gray[6]};
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
  padding: ${({ theme }) => theme.spacing.size4};
  padding-top: ${({ theme }) => `${parseInt(theme.spacing.size9) + parseInt(theme.spacing.size4)}px`};
  text-align: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizing.size8};
  font-family: sans-serif;
  font-weight: 100;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: ${({ theme }) => theme.spacing.size1};
`

export const Image = styled.div`
  width: ${({ theme }) => theme.spacing.size13};
  height: ${({ theme }) => theme.spacing.size13};
  background-image: url(${draw});
  background-size: contain;
  background-position: center center;
  margin: auto;
`

export const Description = styled.span`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizing.size3};
  line-height: ${({ theme }) => theme.fontSizing.size6};
`

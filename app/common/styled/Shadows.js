import styled, { css } from 'styled-components'

export const SharpShadowCss = css`
  box-shadow: 0 1px 1px rgba(0,0,0,0.25),
              0 2px 2px rgba(0,0,0,0.20),
              0 4px 4px rgba(0,0,0,0.15),
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
`

export const SharpShadow = styled.div`
  ${SharpShadowCss}
`

export const DiffuseShadowCss = css`
  box-shadow: 0 1px 1px rgba(0,0,0,0.04),
              0 2px 2px rgba(0,0,0,0.08),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.16);
`

export const DiffuseShadow = styled.div`
  ${DiffuseShadowCss}
`

export const SoftShadowCss = css`
  box-shadow: 0 1px 2px rgba(0,0,0,0.07),
              0 2px 4px rgba(0,0,0,0.07),
              0 4px 8px rgba(0,0,0,0.07),
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07),
              0 32px 64px rgba(0,0,0,0.07);
`

export const SoftShadow = styled.div`
  ${SoftShadowCss}
`

export const ShorterShadowCss = css`
  box-shadow: 0 1px 1px rgba(0,0,0,0.07),
              0 2px 2px rgba(0,0,0,0.07),
              0 4px 4px rgba(0,0,0,0.07),
              0 6px 8px rgba(0,0,0,0.07),
              0 8px 16px rgba(0,0,0,0.07);
`

export const ShorterShadow = styled.div`
  ${ShorterShadowCss}
`

export const LongerShadowCss = css`
  box-shadow: 0 2px 1px rgba(0,0,0,0.05),
              0 4px 2px rgba(0,0,0,0.05),
              0 8px 4px rgba(0,0,0,0.05),
              0 16px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);
`

export const LongerShadow = styled.div`
  ${LongerShadowCss}
`

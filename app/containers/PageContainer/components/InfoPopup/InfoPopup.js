import React from 'react'
import PropTypes from 'prop-types'

import Popup from 'common/components/Popup'
import { Wrapper, Header, Content } from './styled'

const InfoPopup = ({
  callback,
}) => (
  <Popup callback={callback}>
    <Wrapper>
      <Header />
      <Content>
        ciao ciao
      </Content>
    </Wrapper>
  </Popup>
)

InfoPopup.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default InfoPopup

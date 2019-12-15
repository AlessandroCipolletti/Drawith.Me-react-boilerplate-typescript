import React from 'react'
import PropTypes from 'prop-types'

import Popup from 'common/components/Popup'

const InfoPopup = ({
  callback,
}) => (
  <Popup callback={callback}>
    ciao ciao
  </Popup>
)

InfoPopup.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default InfoPopup

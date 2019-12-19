import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { injectIntl, intlShape } from 'react-intl'

import Popup from 'common/components/Popup'
import { Wrapper, Header, Content, Title, Image, Description } from './styled'

import messages from './messages'

const InfoPopup = ({
  callback, intl,
}) => (
  <Popup callback={callback}>
    <Wrapper>
      <Header />
      <Content>
        <Title>{intl.formatMessage(messages.title)}</Title>
        <Image />
        <Description>
          <br /><br />
          {intl.formatMessage(messages.descriptionLine1)}
          <br />
          <big>{intl.formatMessage(messages.descriptionLine2)}</big>
          <br /><br />
          {intl.formatMessage(messages.descriptionLine3)}
        </Description>
      </Content>
    </Wrapper>
  </Popup>
)

InfoPopup.propTypes = {
  callback: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default compose(
  injectIntl,
)(InfoPopup)

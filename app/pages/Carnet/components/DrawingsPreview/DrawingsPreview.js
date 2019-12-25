import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, DraftLabel, SelectLabel } from './styled'

const DrawingsPreview = ({
  drawing, selectMode, selected, draft,
}) => (
  <Wrapper drawing={drawing}>
    {draft && <DraftLabel />}
    {selectMode && <SelectLabel selected={selected} />}
  </Wrapper>
)

DrawingsPreview.propTypes = {
  drawing: PropTypes.string.isRequired,
  selectMode: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  draft: PropTypes.bool.isRequired,
}

export default DrawingsPreview

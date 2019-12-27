import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, DraftLabel, SelectLabel } from './styled'

const DrawingsPreview = ({
  id, drawing, selectMode, selected, draft, onClick,
}) => {
  const handleClick = React.useCallback(() => {
    onClick(id)
  }, [id, onClick])

  return (
    <Wrapper
      data-id={id}
      drawing={drawing}
      onClick={handleClick}
    >
      {draft && <DraftLabel />}
      {selectMode && <SelectLabel selected={selected} />}
    </Wrapper>
  )
}


DrawingsPreview.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  drawing: PropTypes.string.isRequired,
  selectMode: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  draft: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DrawingsPreview

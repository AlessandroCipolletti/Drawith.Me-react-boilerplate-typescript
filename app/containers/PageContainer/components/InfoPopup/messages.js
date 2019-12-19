import { defineMessages } from 'react-intl'

export const scope = 'app.components.InfoPopup'

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Share your creativity',
  },

  descriptionLine1: {
    id: `${scope}.description_line_1`,
    defaultMessage: 'Created by',
  },
  descriptionLine2: {
    id: `${scope}.description_line_2`,
    defaultMessage: 'Alessandro Cipolletti',
  },
  descriptionLine3: {
    id: `${scope}.description_line_3`,
    defaultMessage: 'cipolletti.alessandro@gmail.com',
  },
})

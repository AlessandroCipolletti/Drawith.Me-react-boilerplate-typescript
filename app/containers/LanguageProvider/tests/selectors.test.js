import { DEFAULT_LOCALE } from 'utils/i18n'
import { selectLanguage, makeSelectLocale } from '../selectors'

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = {}
    const mockedState = {
      language: globalState,
    }
    expect(selectLanguage(mockedState)).toEqual(globalState)
  })

  it('makeSelectLocale should select the folder.key state', () => {
    const localeState = {
      locale: DEFAULT_LOCALE,
    }
    const localeSelector = makeSelectLocale()

    expect(localeSelector(localeState)).toEqual(localeState.locale)
  })
})

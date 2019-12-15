import StyledComponentTest from 'common/TU/StyledComponentTest'
import { Wrapper, AppHeader, PageContent } from '../styled'

StyledComponentTest(Wrapper, 'Wrapper', 'div')
StyledComponentTest(AppHeader, 'AppHeader', 'div')
StyledComponentTest(AppHeader.Button, 'AppHeader.Button', 'div')
StyledComponentTest(PageContent, 'PageContent', 'div')

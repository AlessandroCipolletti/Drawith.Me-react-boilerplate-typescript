import StyledComponentTest from 'common/TU/StyledComponentTest'
import { Overlay, Wrapper, Header, Content } from '../styled'

StyledComponentTest(Overlay, 'Overlay', 'div')
StyledComponentTest(Wrapper, 'Wrapper', 'div')
StyledComponentTest(Wrapper.CloseButton, 'Wrapper.CloseButton', 'div')
StyledComponentTest(Header, 'Header', 'div')
StyledComponentTest(Header.Title, 'Header.Title', 'span')
StyledComponentTest(Content, 'Content', 'div')

// import React from 'react'
// import { render } from 'react-testing-library'
//
// const StyledComponentTest = (Component, componentName, componentTag) => {
//   if (!Component || !componentName || !componentTag) {
//     return
//   }
//
//   describe(`<${componentName} />`, () => {
//     it(`should render an <${componentTag}> tag`, () => {
//       const { container } = render(<Component />)
//       expect(container.querySelector(componentTag)).not.toBeNull()
//     })
//
//     it('should have a class attribute', () => {
//       const { container } = render(<Component />)
//       expect(container.querySelector(componentName).hasAttribute('class')).toBe(
//         true,
//       )
//     })
//
//     it('should adopt a valid attribute', () => {
//       const id = 'test'
//       const { container } = render(<Component id={id} />)
//       expect(container.querySelector(componentName).id).toEqual(id)
//     })
//
//     it('should not adopt an invalid attribute', () => {
//       const { container } = render(<Component attribute="test" />)
//       expect(container.querySelector(`div[attribute="test"]`)).toBeNull()
//     })
//   })
// }
//
// export default StyledComponentTest

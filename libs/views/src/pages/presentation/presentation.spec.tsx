import { render } from "@testing-library/react"

import Presentation from "./presentation"

describe("Presentation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Presentation />)
    expect(baseElement).toBeTruthy()
  })
})

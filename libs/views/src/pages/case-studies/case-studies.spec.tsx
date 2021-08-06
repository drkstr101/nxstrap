import { render } from "@testing-library/react"

import CaseStudies from "./case-studies"

describe("CaseStudies", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CaseStudies />)
    expect(baseElement).toBeTruthy()
  })
})

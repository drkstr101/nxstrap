import { render } from "@testing-library/react"

import BlogPosts from "./blog-posts"

describe("BlogPosts", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BlogPosts />)
    expect(baseElement).toBeTruthy()
  })
})

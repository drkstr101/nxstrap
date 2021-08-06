import { Route, Link } from "react-router-dom"

import "./blog-posts.module.scss"

/* eslint-disable-next-line */
export interface BlogPostsProps {}

export function BlogPosts(props: BlogPostsProps) {
  return (
    <div>
      <h1>Welcome to BlogPosts!</h1>

      <ul>
        <li>
          <Link to="/">blog-posts root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the blog-posts root route.</div>} />
    </div>
  )
}

export default BlogPosts

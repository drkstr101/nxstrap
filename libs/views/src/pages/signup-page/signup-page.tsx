import { Route, Link } from "react-router-dom"

import "./signup-page.module.scss"

/* eslint-disable-next-line */
export interface SignupPageProps {}

export function SignupPage(props: SignupPageProps) {
  return (
    <div>
      <h1>Welcome to SignupPage!</h1>

      <ul>
        <li>
          <Link to="/">signup-page root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the signup-page root route.</div>} />
    </div>
  )
}

export default SignupPage

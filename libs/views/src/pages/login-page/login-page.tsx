import { Route, Link } from "react-router-dom"

import "./login-page.module.scss"

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  return (
    <div>
      <h1>Welcome to LoginPage!</h1>

      <ul>
        <li>
          <Link to="/">login-page root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the login-page root route.</div>} />
    </div>
  )
}

export default LoginPage

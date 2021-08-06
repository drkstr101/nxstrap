import { Route, Link } from "react-router-dom"

import "./contact-us.module.scss"

/* eslint-disable-next-line */
export interface ContactUsProps {}

export function ContactUs(props: ContactUsProps) {
  return (
    <div>
      <h1>Welcome to ContactUs!</h1>

      <ul>
        <li>
          <Link to="/">contact-us root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the contact-us root route.</div>} />
    </div>
  )
}

export default ContactUs

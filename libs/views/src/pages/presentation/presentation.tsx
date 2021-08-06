import { Route, Link } from "react-router-dom"

import "./presentation.module.scss"

/* eslint-disable-next-line */
export interface PresentationProps {}

export function Presentation(props: PresentationProps) {
  return (
    <div>
      <h1>Welcome to Presentation!</h1>

      <ul>
        <li>
          <Link to="/">presentation root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the presentation root route.</div>} />
    </div>
  )
}

export default Presentation

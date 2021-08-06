import { Route, Link } from "react-router-dom"

import "./case-studies.module.scss"

/* eslint-disable-next-line */
export interface CaseStudiesProps {}

export function CaseStudies(props: CaseStudiesProps) {
  return (
    <div>
      <h1>Welcome to CaseStudies!</h1>

      <ul>
        <li>
          <Link to="/">case-studies root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the case-studies root route.</div>} />
    </div>
  )
}

export default CaseStudies

import { Col, Container, Row } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

import './home-page.module.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <Container className="m-2">
      <Row>
        <Col>
          <div>
            <h1>Welcome to HomePage!</h1>

            <ul>
              <li>
                <Link to="/">home-page root</Link>
              </li>
            </ul>
            <Route
              path="/"
              render={() => <div>This is the home-page root route.</div>}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

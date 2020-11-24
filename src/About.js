import './About.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

function About() {
  return (
    <div className="About">
        <Jumbotron fluid>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                Hello Again
              </p>
            </Jumbotron>

            <Jumbotron className="text-right">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                Hello Again
              </p>
            </Jumbotron>

            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                Hello Again
              </p>
            </Jumbotron>
        </Jumbotron>

        <footer>
          <p>Author: Tyler Wrigley
          at <a href="#">fake@example.com</a></p>
        </footer>
    </div>
  );
}

export default About;

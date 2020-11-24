import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron'
import city from './images/city.PNG';
import desert from './images/desert.PNG';
import forest from './images/forest.PNG';
import skyline from './images/skyline.PNG';
import village from './images/village.PNG';
import background from './images/background.PNG';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { background } + ")"
};

function Home() {
  return (
    <div className="Home">
      <Carousel>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={desert}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={city}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={forest}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
           <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={skyline}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
           <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={village}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Jumbotron fluid>
            <Jumbotron>
              <h1>Explore</h1>
              <p>
                Explore the world! With each stage containing a variety of hidden <br /> items, puzzles, quests, and mysteries to uncover!
              </p>
            </Jumbotron>

            <Jumbotron className="text-right">
              <h1>Battle</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                Hello Again
              </p>
            </Jumbotron>

            <Jumbotron>
              <h1>Die</h1>
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
          <p>Created by: Tyler Wrigley
          at <a href="#">tjw09260@vtc.edu</a></p>
        </footer>
    </div>
  );
}

export default Home;

import './Home.css';
import bg from '../../assets/pattern.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="content">
          <h1>that which works, works.</h1>
          <p>Thanks for checking out my portfolio! I'm a passionate web developer with a background in Graphic Design.</p>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

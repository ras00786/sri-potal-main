import './Home.css';

import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/obattu.png';
import image3 from '../../../assets/tamarind-rice.jpg';
import image4 from '../../../assets/image4.jpg';
import image5 from '../../../assets/arisa.jpg';
import image6 from '../../../assets/halwapuri.jpg';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="section">
        <div className="section-content">
          <img src={image1} alt="Delicious dish 1" />
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={image2} alt="Obattu - Indian sweet" />
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={image3} alt="Tamarind rice" />
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={image4} alt="Delicious dish 4" />
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={image5} alt="Arisa - Indian sweet" />
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <img src={image6} alt="Halwa puri - Indian sweet" />
        </div>
      </div>
    </div>
  );
};

export default Home;

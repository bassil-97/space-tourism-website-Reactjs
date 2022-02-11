import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import Navbar from '../Navbar/Navbar';

export default function Home() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/destination');
  };

  return( 
    <div className="home__container">
      <Navbar />
      <div className="home__content">
        <div className="row w-100">
          <div className="col-lg-6">
            <h6 className="text-uppercase">so, you want to travel to</h6>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely 
              go to outer space and not hover kind of on the edge of it. Well sit back, 
              and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="col-lg-6">
            <button className="btn explore-btn" onClick={navigateToHome}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

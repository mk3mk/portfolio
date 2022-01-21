import React from 'react';
import './home.scss'

export const Home = ({urlImage}) => {

  return (
    <div id="home" className="home " style={{ backgroundImage: `url(${urlImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <span className="pretitle">Welcome to my World</span>
              <h1 className="title_row1">Hi, I’m Alex Nikitin</h1>
              <h1 className="title_row2">WEB Developer.</h1>
              <h2 className="subtitle">based in BELARUS.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
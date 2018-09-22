import React from "react";

class Body extends React.Component {
  render() {
    return (
      <div className="body-content">
        <span className="outline end-right">HAPPY</span>
        <span className="outline end-left">BIRTHDAY</span>

        <span className="orbs">
          <span>A</span>
          <span>N</span>
          <span>N</span>
          <span>U</span>
        </span>

        <span className="glow">Many Many Happy Returns of the Day.</span>

        <div class="card-layout">
          <div class="w3-card">
            <header class="w3-container w3-blue">
              <h1>Bunny</h1>
            </header>
            <div class="w3-container">
              <p>
                Count your life by smiles, not tears. Count your age by friends,
                not years. Happy birthday!
              </p>
            </div>
          </div>
          <div class="w3-card">
            <header class="w3-container w3-blue">
              <h1>Doll</h1>
            </header>
            <div class="w3-container">
              <p>
                Happy birthday! I hope all your birthday wishes and dreams come
                true.
              </p>
            </div>
          </div>
          <div class="w3-card">
            <header class="w3-container w3-blue">
              <h1>Sapna</h1>
            </header>
            <div class="w3-container">
              <p>
                A wish for you on your birthday, whatever you ask may you
                receive, whatever you seek may you find, whatever you wish may
                it be fulfilled on your birthday and always. Happy birthday!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;

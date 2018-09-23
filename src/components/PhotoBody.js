import React from "react";

class PhotoBody extends React.Component {
  render() {
    return (
      <div>
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h2>July, 2018</h2>
              <img src="/images/Jul 2018.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>June, 2018</h2>
              <img src="/images/June 2018.jpg" />
              <img src="/images/June2 2018.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>May, 2018</h2>
              <img src="/images/May 2018.jpg" />
              <img src="/images/May2 2018.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>April, 2018</h2>
              <img src="/images/April 2018.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>March, 2018</h2>
              <img src="/images/March 2018.jpg" />
              <img src="/images/March2 2018.jpg" />
              <img src="/images/March3 2018.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>Jan, 2018</h2>
              <img src="/images/Jan 2018.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>Nov, 2017</h2>
              <img src="/images/Nov 2017.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>Oct, 2017</h2>
              <img src="/images/Oct 2017.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>Sep, 2017</h2>
              <img src="/images/Sep 2017.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>July, 2017</h2>
              <img src="/images/July 2017.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>April, 2017</h2>
              <img src="/images/April 2017.jpg" />
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>March, 2017</h2>
              <img src="/images/March 2017.jpg" />
              <img src="/images/March2 2017.jpg" />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>Dec, 2016</h2>
              <img src="/images/Dec 2016.jpg" />
            </div>
          </div>
        </div>
        <div className="More">
          <a href="/quotes">
            <button className="w3-btn w3-red w3-round-xxlarge">
              And there is more...
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default PhotoBody;

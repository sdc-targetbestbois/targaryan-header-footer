import React from "react";

function Footer(props) {

  return (
    // <footer className="brian-footer">
    //   <h3>{props.footer}</h3>
    // </footer>
    <footer className="brian-footer">
      {/* <div className="Footer"> */}
        <a href="/" className="footer-logo-frame postings" id="home">
          <span className="footer-logo-box">
            <img src="https://targaryenstore.s3.us-east-2.amazonaws.com/Targaryen-shield.png"></img>
            <div className="footer-logo-inner">
              <h3>Targaryen</h3>
            </div>
          </span>
        </a>
      {/* </div> */}
    </footer>
  )
}


export default Footer;
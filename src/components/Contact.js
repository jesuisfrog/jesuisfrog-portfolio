import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="container"
        id="contact"
        style={{
          marginTop: 60,
        }}
      >
        <div className="row">
          <div className=" col-sm-3 text-center">
            <h3>Contact</h3>
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/michaelbaglio/"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/jesuisfrog"
            >
              <i className="fa fa-github" />
            </a>
          </div>
          <div className="col-sm-9 text-center ">
            <a
              role="button"
              className="btn btn-link"
              href="tel:+1702xxxxxx"
              style={{
                color: "#000000",
              }}
            >
              <i className="fa fa-phone" /> <span>1-702-827-9226</span>
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:jesuisfrog@hopskipcode.com"
              style={{
                color: "#000000",
              }}
            >
              <i className="fa fa-envelope-o" /> <span>jesuisfrog@hopskipcode.com</span>
            </a>
          </div>
        </div>
        <p
          style={{
            marginTop: 50,

            fontStyle: "italic",
          }}
        >
          @created by jesuisfrog
        </p>
      </div>
    );
  }
}

export default Contact;

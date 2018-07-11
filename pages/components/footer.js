import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-5 p-4">
        <div className="container">
          <div className="copyright d-flex justify-content-center align-items-center">
            Developed by <a href="https://github.com/ovpv">Vishnuprasad</a>
          </div>
        </div>
      </footer>
    );
  }
}

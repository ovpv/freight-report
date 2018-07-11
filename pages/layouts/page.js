import { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import Header from "../components/header";
import Taboola from "../components/taboola";
import Page2 from "../pages/page2";
import { Link } from "../routes/url";

class MainApp extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Header />

        <Taboola
          currentUrl={'https://www.taboola.com'}
          pageType={'article'}
          placement={'Below Article Thumbnails'}
          mode={'thumbnails-b-mobile'}
          targetType={'mix'}
        />

        <Link href={`page2`} as={`/page2`} passHref>
          Click me to navigate on Page2
        </Link>
      </div>
    );
  }
}
export default MainApp;

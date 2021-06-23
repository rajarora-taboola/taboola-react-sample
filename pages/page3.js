import React, { Component } from "react";
import Header from "../components/header";
import Taboola from "../components/taboola"
import { Link } from "../routes/url";
import TextSection from "../components/text";

class Page3 extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Header />
        <div>This is page 3</div>
        <TextSection />
        <Taboola
          currentUrl={'https://www.taboola.com/page3'}
          pageType={'article'}
          placement={'Below Article Thumbnails'}
          mode={'thumbnails-b-mobile'}
          targetType={'mix'}
        />
        <Link href={`/`} as={`/`} passHref>
          Click me to navigate on Home page
        </Link>
      </div>
    );
  }
}
export default Page3;

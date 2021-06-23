import React, { Component } from "react";
import Header from "../components/header";
import Taboola from "../components/taboola"
import { Link } from "../routes/url";
import TextSection from "../components/text";

class Page2 extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Header />
        <div>This is page 2</div>
        <TextSection />
        <Taboola
          currentUrl={'https://www.taboola.com/page2'}
          pageType={'article'}
          placement={'Below Article Thumbnails'}
          mode={'thumbnails-b-mobile'}
          targetType={'mix'}
        />
        <Link href={`page3`} as={`/page3`} passHref>
          Click me to navigate on Page3
        </Link>
      </div>
    );
  }
}
export default Page2;

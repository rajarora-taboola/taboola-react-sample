import React, { PureComponent } from "react";
import { ParentContainer, LeadTextHeader } from "./style";

class HomePage extends PureComponent {
  render() {
    return (
      <ParentContainer>
        <LeadTextHeader>This is a Home page</LeadTextHeader>
      </ParentContainer>
    );
  }
}

export default HomePage;

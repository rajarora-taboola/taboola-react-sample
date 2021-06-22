import React, { Component } from "react";
import { MainContainer, LeadTextS, SmallTextS } from "./style";

class Error extends Component {
  render() {
    const { errorData } = this.props;

    return (
      <MainContainer>
        <LeadTextS>Something went wrong!</LeadTextS>
        <SmallTextS>
          <b>Error code:</b> {errorData.data.code}
        </SmallTextS>
        <SmallTextS>
          <b>Error Message:</b> {errorData.data.message}
        </SmallTextS>
      </MainContainer>
    );
  }
}
export default Error;

/* eslint-disable */

import React from "react";
import {
  InfoContainer,
  InfoCard,
  InfoH1,
  InfoH2,
  InfoIcon,
  InfoP,
  InfoWrapper,
} from "./infoElements";
import Icon1 from "../../images/Ppass.jpeg";
import Icon2 from "../../images/lesswork.png";
import Icon3 from "../../images/adapt.png";
import Icon4 from "../../images/download.png";
import Icon5 from "../../images/seccure.png";
import Icon6 from "../../images/enforcement.png";
import Banner from "../../images/01.png";
import "./info.css";

const Info = () => {
  return (
    <InfoContainer>
      <InfoH1> Our Services</InfoH1>
      <div className="banner">
        <img src={Banner} />
      </div>

      <InfoWrapper>
        <InfoCard>
          <InfoIcon src={Icon1} />
          <InfoH2>Sticker Less System</InfoH2>
          <InfoP>
            The service is hassle free. It helps the management to make more
            efficient work. As this is a virtual permit, it allows management
            for issueing any amount of permits.
          </InfoP>
        </InfoCard>

        <InfoCard>
          <InfoIcon src={Icon2} />
          <InfoH2> Less Work</InfoH2>
          <InfoP>
            Save a huge amount of time, with our Virtual Permits you can
            eliminate 95% of the work associated with issuing and maintaining an
            accurate accounting of all the vehicles on your property.
          </InfoP>
        </InfoCard>
        <InfoCard>
          <InfoIcon src={Icon3} />
          <InfoH2> Adaptable</InfoH2>
          <InfoP>
            Our virtual permit system can adapt to any parking situation. Our
            system is completely capable of managing resident vehicles,
            reserved, garage/covered and guest permits all completely paperless
            with the RULES you set!.
          </InfoP>
        </InfoCard>

        <InfoCard>
          <InfoIcon src={Icon4} />
          <InfoH2>No Downloads</InfoH2>
          <InfoP>
            Residents do not need to download anything to register their
            vehicles, simply access our website and they can make any changes to
            their vehicles 24/7/365.
          </InfoP>
        </InfoCard>
        <InfoCard>
          <InfoIcon src={Icon5} />
          <InfoH2>Secure</InfoH2>
          <InfoP>
            Residents do not need to download anything to register their
            vehicles, simply access our website and they can make any changes to
            their vehicles 24/7/365.
          </InfoP>
        </InfoCard>
        <InfoCard>
          <InfoIcon src={Icon6} />
          <InfoH2>Enforcement</InfoH2>
          <InfoP>
            Residents do not need to download anything to register their
            vehicles, simply access our website and they can make any changes to
            their vehicles 24/7/365.
          </InfoP>
        </InfoCard>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;

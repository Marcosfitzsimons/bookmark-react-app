import React from "react";
import ExtensionCard from "./ExtensionCard";
import SectionIntro from "./SectionIntro";
import ChromeIcon from "../assets/logo-chrome.svg";
import FirefoxIcon from "../assets/logo-firefox.svg";
import OperaIcon from "../assets/logo-opera.svg";

const Extension = () => {
  return (
    <section className="h-full w-full py-10 xl:py-20" name="download">
      <SectionIntro
        title="Download the extension"
        text="We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize."
      />
      <div className="grid place-items-center xl:grid-cols-3 lg:container lg:mx-auto lg:py-10">
        <ExtensionCard
          extensionImg={ChromeIcon}
          extensionName="Chrome"
          versionMin="62"
        />
        <ExtensionCard
          extensionImg={FirefoxIcon}
          extensionName="Firefox"
          versionMin="55"
        />
        <ExtensionCard
          extensionImg={OperaIcon}
          extensionName="Opera"
          versionMin="46"
        />
      </div>
    </section>
  );
};

export default Extension;

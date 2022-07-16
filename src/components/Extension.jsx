import React from "react";
import ExtensionCard from "./ExtensionCard";
import SectionIntro from "./SectionIntro";
import ChromeIcon from "../assets/logo-chrome.svg";
import FirefoxIcon from "../assets/logo-firefox.svg";
import OperaIcon from "../assets/logo-opera.svg";

const Extension = () => {
  return (
    <section className="h-full w-full py-5 xl:py-20">
      <SectionIntro
        title="Download the extension"
        text="Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go."
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

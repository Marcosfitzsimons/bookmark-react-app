import React from "react";

const ExtensionCard = ({ extensionImg, extensionName, versionMin }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-8 xl:first-of-type:relative xl:first-of-type:bottom-10 xl:last-of-type:relative xl:last-of-type:top-10">
      <figure className="px-10 pt-10">
        <img src={extensionImg} alt="browser" className="rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Add to {extensionName}</h2>
        <p className="pb-8">Minimum version {versionMin}</p>
        <div className="card-actions border-dashed border-t-2 w-full flex justify-center items-center pt-7">
          <button className="btn btn-primary w-full text-start normal-case text-bg-color bg-soft-blue font-medium shadow-xl hover:bg-transparent hover:border-2">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;

import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-full mt-20 py-5 xl:py-20 bg-soft-blue/20 text-bg-color">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-5 justify-center w-[95%] mx-auto lg:container my-8">
          <p className="uppercase tracking-widest text-base lg:text-lg font-normal">
            35.000+ already joined
          </p>
          <h3 className="text-2xl w-[80%] max-w-xs lg:max-w-md lg:text-4xl">
            Stay up-to-date with what we're doing
          </h3>
        </div>
        <div className="form-control">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label className="input-group input-group-vertical">
            <input
              type="text"
              placeholder="put your email here..."
              className="input input-bordered bg-bg-color text-info-content placeholder:text-info-content"
            />
          </label>
          <button className="btn btn-primary w-full text-start normal-case text-bg-color hover:text-soft-red bg-soft-red font-medium shadow-xl hover:bg-bg-color hover:border-2 border-soft-red hover:border-soft-red">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

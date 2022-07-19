import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-full py-14 xl:py-20 bg-soft-blue/20 text-bg-color"
    >
      <div className="mx-auto text-center max-w-xl">
        <div className="flex flex-col items-center gap-5 justify-center w-[95%] mx-auto my-8 max-w-xl">
          <p className="uppercase tracking-widest text-base lg:text-lg font-normal">
            35.000+ already joined
          </p>
          <h3 className="text-2xl w-[80%] max-w-xs lg:max-w-md lg:text-4xl">
            Stay up-to-date with what we're doing
          </h3>
        </div>
        <div className="lg:flex-row lg:items-center gap-4 form-control w-[75%] mx-auto">
          <label className="label lg:hidden">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group input-group-vertical">
            <input
              type="text"
              placeholder="put your email here..."
              className="input input-bordered bg-bg-color text-info-content placeholder:text-info-content lg:text-base"
            />
          </label>
          <button className="mt-8 lg:w-auto lg:mt-0 btn btn-primary w-full text-start normal-case text-bg-color hover:text-soft-red bg-soft-red font-medium shadow-xl hover:bg-bg-color hover:border-2 border-soft-red hover:border-soft-red xl:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

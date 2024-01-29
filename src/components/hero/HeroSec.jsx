import React from "react";
import Buttonseemore from "../button/Buttonseemore";

const HeroSec = () => {
  let buttonText={
    createcontact:"See More"
}
  return (
    <div className="w-[95%] flex justify-center items-center  mx-auto sm:h-40 lg:h-[27rem]">
      <div className="sm:w-[80%] md:w-32 lg:w-[60%] h-auto  mx-auto whitespace-normal">
        <div className=" text-center">
          <h1
            className="lg:text-5xl  sm:p-2  tracking-tight font-bold  indent-1.5 text-center sm:leading-4 md:leading-10 lg:leading-12"
            style={{ lineHeight: "1.12em" }}
          >
            Manage Your Contacts With
            <span className="text-purple-600"> Contact Book</span>
          </h1>
        </div>

        {/* Add a paragraph with increased line height */}
        <div>
          <p className="mx-auto text-center max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] align-center indent-4 leading-4 sm:leading-5 md:leading-5 lg:leading-6 text-sm sm:text-base lg:base xl:text-base 2xl:text-base ">
            Unleash the power of simplicity with our Contact Book app where
            organization meets effortless connection. Your contacts, your way,
            always at your fingertips
          </p>
        </div>
        <div className="text-center mt-3">
          <Buttonseemore buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
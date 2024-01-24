import React from "react";

const Buttonseemore = ({ buttonText , onClick}) => {
  const createContactText = buttonText.createcontact;
  console.log(buttonText , onClick);
  return (
    <div>
      <button
      onClick={onClick}
        className="tracking-tight px-3 z-30 py-2 bg-purple-500 rounded-md text-white lg:text-[0.9rem] transform hover:scale-95 transition-transform"
      >
        {createContactText}
      </button>
    </div>
  );
};

export default Buttonseemore;

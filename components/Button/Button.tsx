import React from "react";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: string;
}

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-auto"
    >
      {props.children}
    </button>
  );
};

export default Button;

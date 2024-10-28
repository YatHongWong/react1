import React from "react";

interface Props {
  children: string; 
  type?: 'primary' | 'secondary' | 'danger' | 'success'; //? makes it optional, then the following tells which possibel values there are
  onClick: () => void;
}

const Button = ({ children, type = 'primary', onClick }: Props) => {
  return (
    <button className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

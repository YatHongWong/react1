import React, { ReactNode } from "react";

// children is adefault prop, allowing you to pass stuff into props by using <component> Stuff </component>
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

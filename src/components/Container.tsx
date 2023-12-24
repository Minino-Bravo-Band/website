import * as React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-screen-2xl px-6 md:px-8">{children}</div>;
};

export default Container;

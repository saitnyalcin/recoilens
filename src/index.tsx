import React from "react";

const MyComponent: React.FC<{ name: string }> = ({ name }) => {
  return (<div>Hello, {name}!</div>) as JSX.Element;
};

export default MyComponent;

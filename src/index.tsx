import React from "react";

const MyComponent: React.FC<{ name: string }> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default MyComponent;

import React, { useEffect } from "react";

export const ComponentOne = () => {
  useEffect(() => {
    return () => console.log("ComponentOne unmount*******");
  }, []);

  return (
    <div>
      <h1>ComponentOne</h1>
    </div>
  );
};

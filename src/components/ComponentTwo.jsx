import React, { useEffect } from "react";

export const ComponentTwo = () => {
  useEffect(() => {
    return () => console.log("ComponentTwo unmount*******");
  }, []);

  return (
    <div>
      <h1>ComponentTwo</h1>
    </div>
  );
};

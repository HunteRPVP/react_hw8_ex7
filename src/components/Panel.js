import React from "react";

const Panel = ({ children }) => {
  return (
    <fieldset>
      <legend>Полицейский радар</legend>
      {children}
    </fieldset>
  );
};

export default Panel;

import React from "react";
import { Button } from "reactstrap";
const LogOutButton = ({ func, text, history }) => {
  return (
    <Button
      color="danger"
      onClick={() => {
        func();
        history.push("/");
      }}
    >
      {text}
    </Button>
  );
};

export default LogOutButton;

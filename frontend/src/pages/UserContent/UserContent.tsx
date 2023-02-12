import React, { Fragment } from "react";
import { useSelector } from "react-redux";

interface State {
  auth: {
    authToken: string;
  };
}
const UserContent = () => {
  const auth = useSelector((state: State) => state.auth.authToken);
  return (
    <Fragment>
      <div>UserContent</div>
    </Fragment>
  );
};

export default UserContent;

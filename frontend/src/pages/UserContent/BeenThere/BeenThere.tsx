import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../redux/auth/authSlice";

const BeenThere = () => {
  const [visitedCities, setVistitedCities] = useState<string[]>();
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
};

export default BeenThere;

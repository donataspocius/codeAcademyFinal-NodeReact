import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../constants";
import { initializeContentState } from "../../../redux/content/contentSlice";
import { getUserLists } from "../../../utils/functions";
import { selectUserId } from "../../../redux/auth/authSlice";

const BeenThere = () => {
  const [visitedCities, setVistitedCities] = useState<string[]>();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  // console.log("lists ->", lists);

  // useEffect(() => {
  //   const lists = async () => await getUserLists(API.updateUser(userId));

  //   // dispatch(initializeContentState();
  // }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default BeenThere;

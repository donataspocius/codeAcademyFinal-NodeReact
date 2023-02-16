import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountryCities } from "../../redux/content/contentSlice";
import { API } from "../../constants";
import { AppDispatch } from "../../redux/store";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    // dispatch an action to change cities state
    dispatch(fetchCountryCities(API.countryCities(searchInput)));
    navigate("explore");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedSearchInput = e.target.value.split(" ").join("-");
    setSearchInput(formatedSearchInput);
  };
  return (
    <div className={styles.SearchBarContainer}>
      <div>
        <h1>Explore the world</h1>
      </div>
      <div>
        <Input
          placeholder="enter country name"
          onChange={onChange}
          ref={inputRef}
        />
      </div>
      <Button size="small" onClick={onClick}>
        SEARCH
      </Button>
    </div>
  );
};

export default SearchBar;

import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    console.log("searchInput -->", searchInput);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
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

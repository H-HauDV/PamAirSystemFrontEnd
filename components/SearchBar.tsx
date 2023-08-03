import SearchBarStyle from "../public/style/SearchBar.module.css";
import searchIcon from "../img/searchIcon.png";
import React, { useRef, useImperativeHandle } from "react";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
type SearchProps = { onClick: () => void };

export type SearchHandle = {
  returnInputValue: () => string;
  modifyInputValue: (e: any) => void;
};

const SearchBar: React.ForwardRefRenderFunction<SearchHandle, SearchProps> = (
  props: SearchProps,
  forwardedRef
) => {
  const inputRef = useRef<HTMLInputElement>();
  useImperativeHandle(forwardedRef, () => {
    return {
      returnInputValue: () => {
        return inputRef.current.value;
      },
      modifyInputValue: (e) => {
        inputRef.current.value = e;
      },
    };
  });
  return (
    <div>
      <div className={SearchBarStyle.searchBarContainer}>
        <input
          key="search-bar"
          className={SearchBarStyle.searchBar}
          placeholder={"Search"}
          ref={inputRef}
        />
        <img
          alt="error"
          className={SearchBarStyle.searchBarIcon}
          src={searchIcon.src}
          onClick={props.onClick}
        ></img>
      </div>
    </div>
  );
};

export default React.forwardRef(SearchBar);

import DropDownMenuStyle from "../public/style/DropDownMenu.module.css";
import React, { useState, useImperativeHandle } from "react";
type dropDownMenuProps = {
  onClick: (e) => void;
};

export type dropDownMenuHandle = {
  setCityMode: () => string;
  // getLocation: () => string;
};
const DropDownMenu: React.ForwardRefRenderFunction<
  dropDownMenuHandle,
  dropDownMenuProps
> = (props: dropDownMenuProps, forwardedRef) => {
  const [dropDownCityState, setDropDownCityState] = useState("Hourly");
  useImperativeHandle(forwardedRef, () => {
    return {
      setCityMode: () => {
        return dropDownCityState;
      },
    };
  });
  return (
    <div className={DropDownMenuStyle.dropdown}>
      <div className={DropDownMenuStyle.dropBox}>
        <div className={DropDownMenuStyle.dropBoxText}>Predict Model</div>
        <input className={DropDownMenuStyle.dropBoxInput} placeholder={"Select your state"} />
      </div>
      <div className={DropDownMenuStyle.dropdownContent}>
        <a onClick={() => props.onClick("Hourly")}>Hourly</a>
        <a onClick={() => props.onClick("Daily")}>Daily</a>
      </div>
    </div>
  );
};

export default React.forwardRef(DropDownMenu);

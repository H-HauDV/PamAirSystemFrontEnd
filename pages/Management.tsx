import { useState, useCallback, memo, useRef, useEffect } from "react";
import Map, { MapHandle } from "../lib/Map";
import type { TableColumnsType } from 'antd';
import Nav from "../components/Nav";
import ModalBox, { ModalHandle } from "../components/ModalBox";
import SearchBar, { SearchHandle } from "../components/SearchBar";
import DropDownMenu, { dropDownMenuHandle } from "../components/DropDownMenu";
import LocationList from "../components/LocationList";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
import { HoChiMinhDistrict } from "../lib/HoChiMinhDistrict";
import { VietNamLocationList } from "../lib/VietNamLocationList";
import ManagementStyle from "../public/style/Managament.module.css";
const searchArray = (array, result) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(result)) {
      return true;
    }
  }
  return false;
};


export default function Management() {
  const modalRef = useRef<ModalHandle>();
  const searchRef = useRef<SearchHandle>();
  const mapRef = useRef<MapHandle>();
  const dropDownMenuRef = useRef<dropDownMenuHandle>();
  const [inputState, setInputState] = useState("");
  const [nameLocationState, setNameLocationState] = useState(["", ""]);
  const [LoadingOrNot, setLoadingOrNot] = useState(null);
  const [dataTable, setDataTable] = useState(null);
  const [cityMode, setCityMode] = useState("Hourly");
  let isLoading = null;

  useEffect(() => {
    if (inputState != "") {
      searchRef.current.modifyInputValue(inputState);
      mapRef.current.setMapCenter(
        JSON.parse("[" + searchRef.current.returnInputValue() + "]")
      );
      console.log(searchRef.current.returnInputValue());
    }
  }, [inputState]);
  useEffect(() => {
    console.log(nameLocationState);
    setLoadingOrNot(true);
    const getAPI = async () => {
      try {
        const res = await fetch("http://202.191.58.206/pamair/info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            district: nameLocationState[0],
            city: nameLocationState[1],
          }),
        }).then((response) => {
          console.log(response.status);
          if (!response.ok) throw new Error(`${response.status}`);
          else return response;
        });
        const data = await res.json();
        setDataTable(data);
        setLoadingOrNot(false);
      } catch (error) {
        alert("Khu vuc hien tai khong co du lieu");
      }
    };
    if (nameLocationState[0] != "") {
      getAPI();
    }
  }, [nameLocationState]);
  useEffect(() => {
    isLoading = LoadingOrNot;
  }, [LoadingOrNot]);
  return (
    <div className={ManagementStyle.ManagementPageContainer}>
      <div className={ManagementStyle.LocationMapContainer}>
        <div className={ManagementStyle.LocationMapContainerFilterPannel}>
        <DropDownMenu
            onClick={(e) => {
              setCityMode(e);
            }}
            ref={dropDownMenuRef}
          />
          <SearchBar
            ref={searchRef}
            onClick={() => {
              let inputVal = searchRef.current.returnInputValue();

              if (searchArray(HaNoiDistrict, inputVal)) {
                console.log(2);
                setNameLocationState([inputVal, "Ha Noi"]);
                modalRef.current.displayOnClick();
              } else if (searchArray(HoChiMinhDistrict, inputVal)) {
                console.log(3);
                setNameLocationState([inputVal, "Ho Chi Minh"]);
                modalRef.current.displayOnClick();
              } else if (searchArray(VietNamLocationList, inputVal)) {
                console.log(4);
                setNameLocationState([inputVal, inputVal]);
                modalRef.current.displayOnClick();
              } else {
                console.log(5);
                alert("Esnter a valid value lat,lng or district city");
              }
            }}
          />
          
        </div>

        <Map
          onClick={async (e) => {
            await setNameLocationState(e);
            modalRef.current.displayOnClick();
          }}
          cityMode={cityMode}
          ref={mapRef}
        />
      </div>
      <div className={ManagementStyle.LocationListContainer}>
        <LocationList
          onClick={async (e) => {
            await setInputState(e.currentTarget.className);
          }}
        />
      </div>
      <ModalBox
        data={dataTable}
        cityMode={cityMode}
        Location={nameLocationState[0]}
        loadingOrNot={LoadingOrNot}
        ref={modalRef}
      />
    </div>
  );
}

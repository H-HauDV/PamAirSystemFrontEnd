import { useState, useCallback, memo, useRef } from "react";
import { Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MDBContainer, MDBBtn , MDBCol } from "mdbreact";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import styleTestAPI from "../public/style/TestAPI.module.css";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
import { HoChiMinhDistrict } from "../lib/HoChiMinhDistrict";
import ReactLoading from "react-loading";
import sadface from "../img/sadface.png";
import normalface from "../img/normalface.png";
import happyface from "../img/happyface.png";
import veryhappyface from "../img/veryhappyface.png";
import verysadface from "../img/verysadface.png";
import type { MenuProps } from "antd";
export default function TestAPI() {
  let [cityState, setCityState] = useState("");
  let [districtState, setDistrictState] = useState("");
  let [modelState, setModelState] = useState("");
  let [cardClickCheck, setCardClickCheck] = useState(1);
  let [loadingState, setLoadingState] = useState("loading");
  let [dataAPI, setDataAPI] = useState({
    aqi_us: [],
    aqi_vn: [],
    "pm2.5": [],
    time: [],
  });

  const fetchTestAPIOnClick = async () => {
    if (modelState === "12 hours") {
      const res = await fetch("http://202.191.58.206/pamair/hourly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: cityState,
          district: districtState,
        }),
      });
      const data = await res.json();
      setDataAPI({
        aqi_us: data.aqi_us,
        aqi_vn: data.aqi_vn,
        "pm2.5": data["pm2.5"],
        time: data.time,
      });
      console.log(dataAPI);
    } else {
      const res = await fetch("http://202.191.58.206/pamair/dayly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: cityState,
          district: districtState,
        }),
      });
      const data = await res.json();
      setDataAPI({
        aqi_us: data.aqi_us,
        aqi_vn: data.aqi_vn,
        "pm2.5": data["pm2.5"],
        time: data.time,
      });
      console.log(dataAPI);
    }
    setLoadingState("finish");
  };
  const predictCard = (time, pm25, VNAQILevel, USAQILevel) => {
    let color = "";

    let pollutionLevel = "";
    let imgSrc: any;
    if (parseFloat(VNAQILevel) >= 0 && parseFloat(VNAQILevel) <= 50) {
      pollutionLevel = "Good";
    } else if (parseFloat(VNAQILevel) <= 100) {
      pollutionLevel = "Moderate";
    } else if (parseFloat(VNAQILevel) <= 200) {
      pollutionLevel = "Bad";
    } else if (parseFloat(VNAQILevel) <= 300) {
      pollutionLevel = "Harmful";
    } else {
      pollutionLevel = "Unsafe";
    }
    if (pollutionLevel === "Good") {
      color = "blue";
      imgSrc = veryhappyface;
    } else if (pollutionLevel === "Moderate") {
      color = "yellow";
      imgSrc = happyface;
    } else if (pollutionLevel === "Bad") {
      color = "orange";
      imgSrc = normalface;
    } else if (pollutionLevel === "Harmful") {
      color = "red";
      imgSrc = sadface;
    } else if (pollutionLevel === "Unsafe") {
      color = "maroon";
      imgSrc = verysadface;
    }
    return (
      <div  className={styleTestAPI.styleCardDataContainer}>
        <div
          className={styleTestAPI.styleCardDataContainerTime}
        >
          {time}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
            border: `2px solid ${color}`,
            borderRadius: "15px",
            padding: "5px",
            backgroundColor: `${color}`,
            color: color === "blue" ? "white" : "",
            alignContent: "center",
          }}
        >
          <h3
            style={{
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              width: "100px",
            }}
          >
            {pollutionLevel}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "0", margin: "0" }}>PM2.5</h3>
              <h3
                style={{
                  marginTop: "0",
                  margin: "0",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {parseFloat(pm25).toFixed(2)}
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              overflow: "hidden",
              margin: "0px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "0", margin: "0" }}>VN AQI</h3>
              <h3
                style={{
                  marginTop: "0",
                  margin: "0",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {parseFloat(VNAQILevel).toFixed(2)}
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              overflow: "hidden",
              margin: "0px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "0", margin: "0" }}>US AQI</h3>
              <h3
                style={{
                  marginTop: "0",
                  margin: "0",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {parseFloat(USAQILevel).toFixed(2)}
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100px",
              height: "100px",
              overflow: "hidden",
            }}
          >
            <img
              src={imgSrc.src}
              alt="nothing"
              style={{
                transform: "scale(0.4)",
                filter: color === "blue" ? "invert(1) " : "",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const checkName = (className, item) => {
    if (className === "city") {
      setCityState(item);
    } else if (className === "district") {
      setDistrictState(item);
    } else {
      setModelState(item);
    }
  };
  const renderComponent = (requiredList: Array<string>, className) => {
    return requiredList.map((item, index) => {
      return (
        <a
          onClick={() => {
            checkName(className, item);
          }}
          className={className}
          key={index}
        >
          {item}
        </a>
      );
    });
  };
  const selectAPIMenu: any = (
    requiredList,
    embeddedText: string,
    className: string
  ) => {
    return (
      <div className={styleTestAPI.dropdownTestAPI}>
        <div className={styleTestAPI.dropBoxTestAPI}>
          <input
            style={{
              width: "150px",
              height: "30px",
              border: "2px solid black",
              marginRight: "20px",
            }}
            placeholder={embeddedText}
          />
        </div>
        <div className={styleTestAPI.dropdownContentTestAPI}>
          {renderComponent(requiredList, className)}
        </div>
      </div>
    );
  };
  const itemsCity = [
    {
      key: "Ha Noi",
      label: "Ha Noi",
    },
    {
      key: "Ho Chi Minh",
      label: "Ho Chi Minh",
    },
  ];

  const hanoiItems = HaNoiDistrict.map((district) => ({
    key: district,
    label: district,
  }));

  const hochiminhItems = HoChiMinhDistrict.map((district) => ({
    key: district,
    label: district,
  }));

  const itemsmodel = [
    {
      key: "12 hours",
      label: "12 hours",
    },
    {
      key: "3 days",
      label: "3 days",
    },
  ];

  function handleCitySelect({ key }) {
    setDistrictState("");
    setCityState(key);
  }
  function handleDistrictSelect({ key }) {
    setDistrictState(key);
  }
  function handleModelSelect({ key }) {
    setModelState(key);
  }
  return (
    <div>
      <div className={styleTestAPI.selectCityAndDistrict}>
          <div className={styleTestAPI.selectCityAndDistrictLeft}>
            <div className={styleTestAPI.selectCityAndDistrictLeftItems}>
              <Dropdown
                menu={{
                  items: itemsCity,
                  selectable: true,
                  defaultSelectedKeys: ["1"],
                  onSelect: handleCitySelect,
                }}
              >
                <Typography.Link>
                  <Space>
                    Select city
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
              {/* <h3>City</h3>
            {selectAPIMenu(["Ha Noi", "Ho Chi Minh"], "select city", "city")} */}
            </div>
            <div className={styleTestAPI.selectCityAndDistrictLeftItems}>
              {cityState === "Ha Noi" ? (
                <Dropdown
                  menu={{
                    items: hanoiItems,
                    selectable: true,
                    defaultSelectedKeys: [hanoiItems[0].key],
                    onSelect: handleDistrictSelect,
                  }}
                >
                  <Typography.Link>
                    <Space>
                      Select District
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              ) : (
                <Dropdown
                  menu={{
                    items: hochiminhItems,
                    selectable: true,
                    defaultSelectedKeys: [hochiminhItems[0].key],
                    onSelect: handleDistrictSelect,
                  }}
                >
                  <Typography.Link>
                    <Space>
                      Select District
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              )}
            </div>
            <div className={styleTestAPI.selectCityAndDistrictLeftItems}>
              <Dropdown
                menu={{
                  items: itemsmodel,
                  selectable: true,
                  defaultSelectedKeys: [itemsmodel[0].key],
                  onSelect: handleModelSelect,
                }}
              >
                <Typography.Link>
                  <Space>
                    Select Model
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
              {/* <h3>Model</h3>
            {selectAPIMenu(["12 hours", "3 days"], "select model", "model")} */}
            </div>
          </div>
          <div className={styleTestAPI.selectCityAndDistrictRight}>
            <button
              className={styleTestAPI.buttonAPIPredict}
              onClick={() => {
                setLoadingState("loading");
                if (cardClickCheck === 1) {
                  setCardClickCheck(0);
                } else if (cardClickCheck === 0) {
                  setCardClickCheck(0);
                }

                if (cityState && districtState && modelState) {
                  fetchTestAPIOnClick();
                } else {
                  alert(`Error:please prompt city and district`);
                }
              }}
            >
              Get Predict Result
            </button>
        </div>
      </div>
      <div
        className={styleTestAPI.downPannelShowTextAndTable}
      >
        <div className={styleTestAPI.downPannelShowTextAndTableText}>
          <div className={styleTestAPI.downPannelShowTextAndTableTextSmall}>
            <div className={styleTestAPI.downPannelShowTextAndTableTextSmallLabel}>
              Location
            </div>
            <div className={styleTestAPI.downPannelShowTextAndTableTextSmallCont}>{cityState + "," + districtState}</div>
          </div>
          <div className={styleTestAPI.downPannelShowTextAndTableTextSmall}>
            <div className={styleTestAPI.downPannelShowTextAndTableTextSmallLabel}>Model</div>
            <div className={styleTestAPI.downPannelShowTextAndTableTextSmallCont}>{modelState}</div>
          </div>
        </div>
        <div
          className={styleTestAPI.downPannelShowTextAndTableTable}
        >
          <div className={styleTestAPI.downPannelShowTextAndTableTableHead}>
            <div
              style={{
                marginRight: "120px",
                marginLeft: "20px",
                width: "100px",
              }}
            >
              {modelState === "12 hours" ? "Hour" : "Day"}
            </div>
            <div>Pollution Level</div>
          </div>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              height: "400px",
              padding: "10px",
              overflowY: "auto",
              overflowX: "hidden",
              display: "flex",
              justifyContent: "start",
            }}
            className={styleTestAPI.TestAPICardContainer}
          >
            {loadingState === "loading" ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReactLoading type="balls" color="#000" />
                  </div>
                  <h3>waiting to fetch goods</h3>
                </div>
              </div>
            ) : (
              <div className={styleTestAPI.styleCardDataGrowContainer}>
                {dataAPI.time.map((item, index) => {
                  return predictCard(
                    dataAPI.time[index],
                    dataAPI["pm2.5"][index],

                    dataAPI.aqi_vn[index] + " VN AQI",
                    dataAPI.aqi_us[index] + " US AQI"
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useCallback, memo, useRef, useEffect } from "react";
import Map, { MapHandle } from "../lib/Map";
import type { TableColumnsType } from "antd";
import { Input, Alert } from "antd";
import { Button, notification, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Typography } from "antd";
import Nav from "../components/Nav";
import ModalBox, { ModalHandle } from "../components/ModalBox";
import SearchBar, { SearchHandle } from "../components/SearchBar";
import DropDownMenu, { dropDownMenuHandle } from "../components/DropDownMenu";
import LocationList from "../components/LocationList";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
import { HoChiMinhDistrict } from "../lib/HoChiMinhDistrict";
import { Table } from "antd";
import { VietNamLocationList } from "../lib/VietNamLocationList";
import ManagementStyle from "../public/style/Managament.module.css";
import { compileString } from "sass";
const searchArray = (array, result) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(result)) {
      return true;
    }
  }
  return false;
};
type NotificationType = "success" | "info" | "warning" | "error";
const columns = [
  {
    title: <div className={ManagementStyle.LocationListHeaderText}>Time</div>,
    dataIndex: "time",
    key: "time",
  },
  {
    title: (
      <div className={ManagementStyle.LocationListHeaderText}>Winddir</div>
    ),
    dataIndex: "Winddir",
    key: "Winddir",
  },
  {
    title: (
      <div className={ManagementStyle.LocationListHeaderText}>Humidity</div>
    ),
    dataIndex: "humidity",
    key: "humidity",
  },
  {
    title: <div className={ManagementStyle.LocationListHeaderText}>Pm2.5</div>,
    dataIndex: "pm2.5",
    key: "pm2.5",
  },
  {
    title: (
      <div className={ManagementStyle.LocationListHeaderText}>Temperature</div>
    ),
    dataIndex: "temperature",
    key: "temperature",
  },
  {
    title: (
      <div className={ManagementStyle.LocationListHeaderText}>Trained</div>
    ),
    dataIndex: "trained",
    key: "trained",
  },
  {
    title: (
      <div className={ManagementStyle.LocationListHeaderText}>Windspeed</div>
    ),
    dataIndex: "windspeed",
    key: "windspeed",
  },
];
export default function Data() {
  const modalRef = useRef<ModalHandle>();
  const searchRef = useRef<SearchHandle>();
  const mapRef = useRef<MapHandle>();
  const dropDownMenuRef = useRef<dropDownMenuHandle>();
  const [inputState, setInputState] = useState("");
  const [nameLocationState, setNameLocationState] = useState(["", ""]);
  const [LoadingOrNot, setLoadingOrNot] = useState(null);
  const [dataTable, setDataTable] = useState(null);
  const [dateDataNew, setDateDataNew] = useState(10);
  const [YearDataNew, setYearDataNew] = useState(2023);

  const [cityMode, setCityMode] = useState("Hourly");
  let isLoading = null;
  const [api, contextHolder] = notification.useNotification();
  const [notificationVisible, setNotificationVisible] = useState(false);

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
    async function fetchDataLocation() {
      const url = "http://202.191.58.206/pamair/locationlist";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      const itemsForDropDOwnNew = result.map((item, index) => (
        <Menu.Item key={item.location}>{item.location}</Menu.Item>
      ));
      setDataTableLocation(itemsForDropDOwnNew);
    }
    fetchDataLocation();
  }, [LoadingOrNot]);
  const [dataTableNew, setDataTableNew] = useState(null);
  const [dataTableLocation, setDataTableLocation] = useState(null);
  const [selectedKeys, setSelectedKeys] = useState(null);
  async function fetchDataNew() {
    if (selectedKeys !== null && selectedKeys !== "") {
      const url = "http://202.191.58.206/pamair/data";
      const data = {
        location: selectedKeys,
        month: dateDataNew,
        year: YearDataNew,
      };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return;
      }
      const result = await response.json();

      console.log("resultLoca");
      console.log(result);
      console.log("resultLoca");

      if (result === null || result === "error") {
        console.log("error");
        setNotificationVisible(true);
      } else {
        setNotificationVisible(false);

        setDataTableNew(result);
      }
    }
  }

  const [selectedLocation, setSelectedLocation] = useState(null);
  const handleMenuClick = (e: any) => {
    setSelectedKeys(e.key);
    setSelectedLocation(e.key);
    console.log(selectedKeys);
  };
  const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const numericValue = parseInt(inputValue, 10);
    setDateDataNew(numericValue);
  };
  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const numericValue = parseInt(inputValue, 10);

    setYearDataNew(numericValue);
  };
  return (
    <div className={ManagementStyle.ManagementPageContainer}>
      <div className={ManagementStyle.LocationListContainer}>
        <LocationList
          onClick={async (e) => {
            await setInputState(e.currentTarget.className);
          }}
        />
      </div>
      <div className={ManagementStyle.LocationNewContainerNew}>
        {/* <button onClick={fetchDataNew}>fetchDataNew</button> */}
        <div className={ManagementStyle.LocationNewContainerNewHight}>
          <Dropdown
            className={ManagementStyle.LocationListDrop}
            overlay={<Menu onClick={handleMenuClick}>{dataTableLocation}</Menu>}
            trigger={["click"]}
          >
            <Typography.Link>
              <Space>
                {selectedLocation ? selectedLocation : "Select location"}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          <Input
            className={ManagementStyle.LocationInput}
            onChange={handleChangeMonth}
            placeholder="Month"
            maxLength={16}
          />
          <Input
            className={ManagementStyle.LocationInput}
            onChange={handleChangeYear}
            placeholder="Year"
            maxLength={16}
          />

          <button
            className={ManagementStyle.LocationInputButton}
            onClick={fetchDataNew}
          >
            Get data
          </button>
        </div>
        <div className={ManagementStyle.LocationInpuError}>
          {notificationVisible ? (
            <Alert
              message="Current location has no data available for the selected time period"
              type="error"
            />
          ) : (
            <></>
          )}
        </div>
        <Table
          className={ManagementStyle.LocationListTable}
          columns={columns}
          dataSource={dataTableNew}
          bordered
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

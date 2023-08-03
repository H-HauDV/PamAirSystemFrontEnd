import {
  useState,
  useEffect,
  memo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import LocationListStyle from "../public/style/LocationList.module.css";
import { Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Table } from "antd";
import { FundTwoTone, EnvironmentTwoTone } from "@ant-design/icons";

import { HaNoiLocationList } from "../lib/HaNoiLocationList";
import type { TableColumnsType } from "antd";
import { HoChiMinhLocationList } from "../lib/HoChiMinhLocationList";
import APIHoChiMinhLocationList from "../lib/APIHoChiMinhLocationList";
import APIHaNoiLocationList from "../lib/APIHanoiLocationList";
import { LocationCard } from "../lib/LocationCard";

//promise any on the backend can not be extract by any other method than maps

interface Record {
  MaTram: number;
  TenTram: string;
  lati: number;
  lang: number;
  location: string;
  mdape: number;
}

interface GroupedRecord {
  location: string;
  mdape: number;
  records: Record[];
}

interface Props {
  data: GroupedRecord[];
}

const columns = [
  {
    title: (
      <div className={LocationListStyle.LocationListHeaderText}>
        <EnvironmentTwoTone
          className={LocationListStyle.LocationListHeaderIcon}
        />
        Location
      </div>
    ),
    dataIndex: "location",
    key: "location",
    className: LocationListStyle.LocationListLoca,
  },
  {
    title: (
      <div className={LocationListStyle.LocationListHeaderText}>
        <FundTwoTone className={LocationListStyle.LocationListHeaderIcon} />
        MDAPE
      </div>
    ),
    dataIndex: "mdape",
    key: "mdape",
    className: LocationListStyle.LocationListMDAPE,
  },
];

const expandedRowRender = (record: GroupedRecord) => {
  const columns = [
    {
      title: "Mã trạm",
      dataIndex: "Ma tram",
      key: "Ma tram",
    },
    {
      title: "Tên trạm",
      dataIndex: "Ten tram",
      key: "Ten tram",
    },
    {
      title: "lat",
      dataIndex: "lat",
      key: "lat",
    },
    {
      title: "lon",
      dataIndex: "lon",
      key: "lon",
    },
  ];

  return (
    <Table columns={columns} dataSource={record.records} pagination={false} />
  );
};

function LocationList(props: { onClick: (e) => void }, ref) {
  const addingCardRef = useRef<HTMLInputElement>();
  const [ListState, setListState] = useState("Ha Noi");
  const [cardListState, setCardListState] = useState(HaNoiLocationList);

  const [dataHNAVG, setDataHNAVG] = useState();
  const [dataHNMax, setDataHNMax] = useState({ mdape: 0, location: "null" });
  const [dataHNMin, setDataHNMin] = useState({ mdape: 0, location: "null" });

  const [dataHCMAVG, setDataHCMAVG] = useState();
  const [dataHCMMax, setDataHCMMax] = useState({ mdape: 0, location: "null" });
  const [dataHCMMin, setDataHCMMin] = useState({ mdape: 0, location: "null" });

  const numberRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const districtRef = useRef<HTMLInputElement>();
  const latRef = useRef<HTMLInputElement>();
  const lngRef = useRef<HTMLInputElement>();

  const [backEndLocationListHCM, setBackEndLocationListHCM] = useState<
    GroupedRecord[]
  >([]);
  const [backEndLocationListHN, setBackEndLocationListHN] = useState<
    GroupedRecord[]
  >([]);
  useEffect(() => {
    APIHaNoiLocationList().then((res) => {
      setDataHNAVG(res["average mdape"]);
      setDataHNMax(res.max);
      setDataHNMin(res.min);

      const data = res.data;
      const groupedData = data.reduce((acc, record) => {
        const existingGroup = acc.find(
          (group) => group.location === record.location
        );
        if (existingGroup) {
          existingGroup.records.push(record);
        } else {
          acc.push({
            location: record.location,
            mdape: record.mdape,
            records: [record],
          });
        }
        return acc;
      }, []);
      console.log("setBackEndLocationListHN");
      console.log(res);
      setBackEndLocationListHN(groupedData);
    });

    APIHoChiMinhLocationList().then((res) => {
      setDataHCMAVG(res["average mdape"]);
      setDataHCMMax(res.max);
      setDataHCMMin(res.min);

      const data = res.data;
      const groupedData = data.reduce((acc, record) => {
        const existingGroup = acc.find(
          (group) => group.location === record.location
        );
        if (existingGroup) {
          existingGroup.records.push(record);
        } else {
          acc.push({
            location: record.location,
            mdape: record.mdape,
            records: [record],
          });
        }
        return acc;
      }, []);
      console.log("setBackEndLocationListHCM");
      console.log(res);
      setBackEndLocationListHCM(groupedData);
    });
  }, []);
  const checkListState = () => {
    if (ListState === "Ha Noi") {
      setListState("Ho Chi Minh");
    } else {
      setListState("Ha Noi");
    }
  };

  const ListLocationCard = (array: Array<any>) => {
    return array.map((items: any, index: any) => {
      let nextVal =
        array[index + 1] === undefined ? "" : array[index + 1]["location"];
      let valueChange = items["location"] === nextVal;
      console.log(Object.keys(items));
      return LocationCard(
        index,
        items["Ma tram"],
        items["Ten tram"],
        items["location"],
        items["lon"],
        items["lat"],
        valueChange
      );
    });
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
  function handleCitySelect({ key }) {
    setListState(key);
  }
  return (
    <div className={LocationListStyle.LocationList}>
      <Dropdown
        className={LocationListStyle.LocationListDrop}
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
      <div className={LocationListStyle.LocationListRow}>
        <div className={LocationListStyle.LocationListAvg}>
          <div className={LocationListStyle.LocationListTitle}>Avg</div>
          <div className={LocationListStyle.LocationListData}>
            {ListState === "Ha Noi" ? dataHNAVG : dataHCMAVG}
          </div>
        </div>
        <div className={LocationListStyle.LocationListHigh}>
          <div className={LocationListStyle.LocationListTitle}>Max</div>
          <div className={LocationListStyle.LocationListData}>
            {ListState === "Ha Noi" ? dataHNMax.mdape : dataHCMMax.mdape}
          </div>
          <div className={LocationListStyle.LocationListDistrict}>
            {ListState === "Ha Noi" ? dataHNMax.location : dataHCMMax.location}
          </div>
        </div>
        <div className={LocationListStyle.LocationListLow}>
          <div className={LocationListStyle.LocationListTitle}>Min</div>
          <div className={LocationListStyle.LocationListData}>
            {ListState === "Ha Noi" ? dataHNMin.mdape : dataHCMMin.mdape}
          </div>
          <div className={LocationListStyle.LocationListDistrict}>
            {ListState === "Ha Noi" ? dataHNMin.location : dataHCMMin.location}
          </div>
        </div>
      </div>
      <Table
        className={LocationListStyle.LocationListTable}
        columns={columns}
        dataSource={
          ListState === "Ha Noi"
            ? backEndLocationListHN
            : backEndLocationListHCM
        }
        bordered
        expandable={{ expandedRowRender, defaultExpandAllRows: true }}
      />
    </div>
  );
}

export default LocationList;

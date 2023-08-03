import React, {
  useState,
  useCallback,
  memo,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Circle,
  Marker,
  LoadScript,
  useLoadScript,
  Rectangle,
} from "@react-google-maps/api";
import { HaNoiLocationList } from "./HaNoiLocationList";
import { HoChiMinhLocationList } from "./HoChiMinhLocationList";
import MarkerListHaNoi from "./MarkerListHanoi";
import MarkerListHoChiMinh from "./MarkerListHoChiMinh";
import { VietNamLocationList } from "./VietNamLocationList";
const containerStyle = {
  width: "100%",
  height: "500px",
  overFlow: "hidden",
};
type MapProps = {
  cityMode: string;
  onClick: (e) => void;
};

export type MapHandle = {
  setMapCenter: (a) => void;
  // getLocation: () => string;
};
const Map: React.ForwardRefRenderFunction<MapHandle, MapProps> = (
  props: MapProps,
  forwardedRef
) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 21.083367,
    lng: 105.783562,
  });
  let zoom = props.cityMode === "Daily" ? 4 : 10;

  useImperativeHandle(forwardedRef, () => {
    return {
      setMapCenter: (a) => {
        setCenter({
          lat: a[0],
          lng: a[1],
        });
      },
    };
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCJVKpG78g8xeg9qiQPRmMruAf9976Xnxo",
  });

  return isLoaded ? (
    <div style={{ width: "100%", display: "flex", alignItems:"center",justifyContent:"center" }}>
      <div style={{ border: "1px solid black",borderRadius:"0px", width: "96%" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {props.cityMode === "Hourly" ? (
            <div>
              {MarkerListHaNoi.map((items, index) => {
                return (
                  <Marker
                    // required
                    key={items[2] + "," + items[1]}
                    onClick={(e) => {
                      console.log(items[2] + "," + items[1]);

                      props.onClick([items[0], "Ha Noi"]);
                    }}
                    position={{
                      lat: items[2],
                      lng: items[1],
                    }}
                    // required

                    label={items[0]}
                  />
                );
              })}
              //for some reasons the api has error dealing with NaN type so I
              have to type my own
              <Marker
                key="Quan 1"
                position={{ lat: 10.77659225, lng: 106.7013761 }}
                onClick={(e) => {
                  props.onClick(["Quan 1", "Ho Chi Minh"]);
                }}
                label="Quan 1"
              />
              <Marker
                key="Quan 3"
                position={{ lat: 10.785510200000001, lng: 106.68989895 }}
                onClick={(e) => {
                  props.onClick(["Quan 3", "Ho Chi Minh"]);
                }}
                label="Quan 3"
              />
              <Marker
                key="Quan 4"
                position={{ lat: 10.755394, lng: 106.693841 }}
                onClick={(e) => {
                  props.onClick(["Quan 4", "Ho Chi Minh"]);
                }}
                label="Quan 4"
              />
              <Marker
                key="Quan 5"
                position={{ lat: 10.7622655, lng: 106.6823485 }}
                onClick={(e) => {
                  props.onClick(["Quan 5", "Ho Chi Minh"]);
                }}
                label="Quan 5"
              />
              {/* <Marker key="Quan 6" position={{ lat: 21.028511, lng: 105.8048173 }} /> */}
              <Marker
                key="Quan 7"
                position={{ lat: 10.742548366666668, lng: 106.70075383333334 }}
                onClick={(e) => {
                  props.onClick(["Quan 7", "Ho Chi Minh"]);
                }}
                label="Quan 7"
              />
              <Marker
                key="Quan 8"
                position={{ lat: 10.738787, lng: 106.677513 }}
                onClick={(e) => {
                  props.onClick(["Quan 8", "Ho Chi Minh"]);
                }}
                label="Quan 8"
              />
              {/* <Marker key="Quan 10" position={{ lat: 21.028511, lng: 105.8048173 }} /> */}
              {/* <Marker key="Quan 11" position={{ lat: 21.028511, lng: 105.8048173 }} /> */}
              <Marker
                key="Quan 12"
                position={{ lat: 10.8279265, lng: 106.6277305 }}
                onClick={(e) => {
                  props.onClick(["Quan 12", "Ho Chi Minh"]);
                }}
                label="Quan 12"
              />
              <Marker
                key="Quan Binh Thanh"
                position={{ lat: 10.802692, lng: 106.7122945 }}
                onClick={(e) => {
                  props.onClick(["Quan Binh Thanh", "Ho Chi Minh"]);
                }}
                label="Quan Binh Thanh"
              />
              <Marker
                key="Quan Binh Tan"
                position={{ lat: 10.756594449999998, lng: 106.61871693999998 }}
                onClick={(e) => {
                  props.onClick(["Quan Binh Tan", "Ho Chi Minh"]);
                }}
                label="Quan Binh Tan"
              />
              <Marker
                key="Quan Go Vap"
                position={{ lat: 10.821925, lng: 106.691291 }}
                onClick={(e) => {
                  props.onClick(["Quan Go Vap", "Ho Chi Minh"]);
                }}
                label="Quan Go Vap"
              />
              <Marker
                key="Quan Phu Nhuan"
                position={{ lat: 10.797848, lng: 106.690378 }}
                onClick={(e) => {
                  props.onClick(["Quan Phu Nhuan", "Ho Chi Minh"]);
                }}
                label="Quan Phu Nhuan"
              />
              <Marker
                key="Quan Tan Binh"
                position={{ lat: 10.793554499999999, lng: 106.647749 }}
                onClick={(e) => {
                  props.onClick(["Quan Tan Binh", "Ho Chi Minh"]);
                }}
                label="Quan Tan Binh"
              />
              <Marker
                key="Quan Tan Phu"
                position={{ lat: 10.799957999999998, lng: 106.6223456 }}
                onClick={(e) => {
                  props.onClick(["Quan Tan Phu", "Ho Chi Minh"]);
                }}
                label="Quan Tan Phu"
              />
              <Marker
                key="Huyen Binh Chanh"
                position={{ lat: 10.772, lng: 106.544 }}
                onClick={(e) => {
                  props.onClick(["Huyen Binh Chanh", "Ho Chi Minh"]);
                }}
                label="Huyen Binh Chanh"
              />
            </div>
          ) : (
            <div>
              {VietNamLocationList.map((items, index) => {
                return (
                  <Marker
                    // required
                    key={items[2] + "," + items[1]}
                    onClick={(e) => {
                      console.log(items[2] + "," + items[1]);
                      props.onClick([items[0], items[0]]);
                    }}
                    position={{
                      lat: items[1],
                      lng: items[2],
                    }}
                    // required
                    label={items[0]}
                  />
                );
              })}
            </div>
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default React.forwardRef(Map);

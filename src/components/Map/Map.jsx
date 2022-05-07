import React, { useCallback, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import brand from "../../img/best-brand.png";
import "./Map.css";

const Map = () => {
  const position = [23.810331, 90.412521];

  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="px-6 py-12 md:px-12">
            <div className="grid lg:grid-cols-2 lg:gap-x-12 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl mb-10 text-center font-serif font-bold">
                  Best Brands
                </h1>
                <img
                  src={brand}
                  className="w-full rounded-lg sshadow-lg"
                  alt=""
                />
              </div>

              <div className="mb-12 lg:mb-0 overflow-hidden">
                <h1 className="text-4xl mb-10 text-center font-serif font-bold">
                  Pickup from store
                </h1>
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      BIG STORE <br /> For Best and good qulitey croseriys Found
                      Here
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Map;

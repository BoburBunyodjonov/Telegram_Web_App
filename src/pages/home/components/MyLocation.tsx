import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ErrorIcon from "@mui/icons-material/Error";
import { Link, NavLink } from "react-router-dom";
import BottomDrawer from "../../../components/BottomModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleLocationDrawer } from "../../../reducers/DrawerSlice";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";
import { geocodeCoordinates } from "../../Profile/components/geocodeUtils";

const MyLocation = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [userAddress, setUserAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const locationDrawerOpen = useSelector(
    (state: RootState) => state.drawer.locationOpen
  );

  const handleLocationDrawerToggle = () => {
    dispatch(toggleLocationDrawer());
  };

  const { t } = useTranslation();

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    const savedAddress = localStorage.getItem("userAddress");

    if (savedLocation) {
      setUserLocation(JSON.parse(savedLocation));
    }

    if (savedAddress) {
      setUserAddress(savedAddress);
    } else if (savedLocation) {
      // If address is not available but location is, fetch the address
      fetchAddressFromCoordinates(JSON.parse(savedLocation));
    }
  }, []);

  const fetchAddressFromCoordinates = async (coords: [number, number]) => {
    setLoading(true);
    try {
      const address = await geocodeCoordinates(coords[0], coords[1]);
      setUserAddress(address);
      localStorage.setItem("userAddress", address);
      setError(null);
    } catch (err) {
      setError("Failed to retrieve address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavLink to="" onClick={handleLocationDrawerToggle}>
        <Box className="w-full flex justify-between items-center p-3">
          <LocationOnIcon
            style={{ fontSize: "30px" }}
            className="text-[#309156]"
          />
          <Typography>{t("address_add")}</Typography>
          <ErrorIcon
            style={{ fontSize: "30px" }}
            className=" text-[rgb(234_179_8)]"
          />
        </Box>
      </NavLink>
      <BottomDrawer
        open={locationDrawerOpen}
        onClose={handleLocationDrawerToggle}
        title="Мои адреса"
      >
        <Link className="flex items-center py-4 px-2 cursor-pointer" to="/map">
          <p className="flex-1 text-telegram-black">Добавить адрес</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            width="24"
            className="text-telegram-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userLocation && (
          <div className="mt-4">
            <p className="text-telegram-black font-bold">Saved Address:</p>
            <p className="text-telegram-black">
              Address: {userAddress || "Address not available"}
            </p>
            <p className="text-telegram-black">
              Location: {userLocation[0]}, {userLocation[1]}
            </p>
          </div>
        )}

        <button
          onClick={handleLocationDrawerToggle}
          title="common.close"
          className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
        >
          Готово
        </button>
      </BottomDrawer>
    </>
  );
};

export default MyLocation;

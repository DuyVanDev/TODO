import React, { useEffect, useState, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { GROUPID, IMAGES_DOMAIN, callApi } from "../../services/Api";
import { Button, Menu, Drawer, Empty, Badge } from "antd";
import { useGlobalState } from "../../hooks";
import { addMenu, addSetting } from "../../store";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  const [current, setCurrent] = useState("mail");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  useEffect(() => {
    Shop_spWeb_Menu_List();
    Shop_spWeb_Setting_List();
    // Shop_spWeb_News_List();
  }, []);

  // const Shop_spWeb_News_List = async () => {
  //   const pr = {
  //     Domain: "",
  //     GroupId: GROUPID,
  //   };
  //   const params = {
  //     Json: JSON.stringify(pr),
  //     func: "Shop_spWeb_News_List",
  //   };
  //   try {
  //     const result = await callApi.Main(params);
  //     result?.length && result?.length > 0 && dispatch(addNews(result));
  //   } catch (err) {}
  // };
  //#region danh sách menu độngt
  const Shop_spWeb_Menu_List = async () => {
    const pr = {
      Domain: "",
      GroupId: GROUPID,
      keylang: localStorage.getItem("keyLang"),
    };
    const params = {
      Json: JSON.stringify(pr),
      func: "Shop_spWeb_Menu_List",
    };
    try {
      const result = await callApi.Main(params);
      result?.length && result?.length > 0 && dispatch(addMenu(result));
      // setDataMenu(result);
    } catch (err) {}
  };
  //#endregion

  const Shop_spWeb_Setting_List = async () => {
    const pr2 = {
      Domain: "",
      GroupId: GROUPID,
    };
    const params2 = {
      Json: JSON.stringify(pr2),
      func: "Shop_spWeb_Setting_List",
    };
    try {
      const result2 = await callApi.Main(params2);
      let Logo =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Logo")
          .DataSetting.replace(",", "");

      let Hotline = result2.find(
        (e) => e.KeySetting === "Hotline"
      )?.DataSetting;
      let Email = result2.find((e) => e.KeySetting === "Email")?.DataSetting;
      let Slogan = result2.find((e) => e.KeySetting === "Slogan")?.DataSetting;
      let Map = result2.find((e) => e.KeySetting === "Map")?.DataSetting;
      let TermsAndConditions = result2.find(
        (e) => e.KeySetting === "TermsAndConditions"
      )?.DataSetting;
      let PrivacyPolicy = result2.find(
        (e) => e.KeySetting === "PrivacyPolicy"
      )?.DataSetting;
      let Hero1 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero1")
          ?.DataSetting.replace(",", "");
      let Hero2 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero2")
          ?.DataSetting.replace(",", "");
      let Hero3 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero3")
          ?.DataSetting.replace(",", "");
      let Hero4 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero4")
          ?.DataSetting.replace(",", "");
      let Hero5 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero5")
          ?.DataSetting.replace(",", "");
      let Hero6 =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "Hero6")
          ?.DataSetting.replace(",", "");
      let Contentproduction = result2.find(
        (e) => e.KeySetting === "Contentproduction"
      );

      let Address = result2.find(
        (e) => e.KeySetting === "Address"
      )?.DataSetting;
      let AboutCompany = result2.find(
        (e) => e.KeySetting === "AboutCompany"
      )?.DataSetting;

      let ImageABoutUs =
        IMAGES_DOMAIN +
        result2
          .find((e) => e.KeySetting === "ImageABoutUs")
          ?.DataSetting.replace(",", "");
      let data = {
        Logo,
        Email,
        Slogan,
        Hotline,
        AboutCompany,
        ImageABoutUs,
        Map,
        Contentproduction,
        Address,
        Hero1,
        Hero2,
        Hero3,
        Hero4,
        Hero5,
        Hero6,
        PrivacyPolicy,
        TermsAndConditions,
      };
      dispatch(addSetting(data));
    } catch (err) {
      console.log(err);
    }
  };
  const RenderMenu = () => {
    return globalState.menu.map((x) => {
      return (
        <Link
          class="text-gray-600  hover:text-gray-800 px-3 py-2 rounded-md text-md font-medium"
          to={x.MenuUrl}
          index={x.MenuId}
          onClick={() => setOpenMenuMobile(false)}
        >
          {x.MenuName}
        </Link>
      );
    });
  };
  return (
    <>
      {/* <div className="bg-red-700 hidden sm:block  mx-auto">
        <div class=" lg:container lg:mx-auto mx-2 md:mx-4 flex items-center justify-between gap-4 py-2 text-white">
          <p class="text-md font-medium">

            <span className="ml-2">edwqdq</span>
          </p>
          <p class="text-sm font-semibold  hidden lg:block">
            đưe
          </p>
          <p class="text-sm font-semibold">
            <span className="mr-2">Liên hệ</span>
            ưdwecfwe
          </p>
        </div>
      </div> */}
      <header class="text-gray-600 md:sticky md:top-0 md:z-[100000] body-font bg-white">
        <div>
          <div>
            <nav class="bg-white shadow px-4 md:px-0 ">
              <div class=" mx-auto container">
                <div class="flex items-center justify-between h-16">
                  <div class="w-full justify-between flex items-center">
                    <Link class="flex-shrink-0" to="/">
                      <img
                        class="w-8 h-8"
                        src={globalState.setting.Logo}
                        alt="Workflow"
                      />
                    </Link>
                    <div class="hidden md:block">
                      <div class="flex items-baseline ml-10 space-x-4">
                        <RenderMenu />
                      </div>
                    </div>
                  </div>
                  <div class="block">
                    <div class="flex items-center ml-4 md:ml-6"></div>
                  </div>
                  <div class="flex -mr-2 md:hidden">
                    <button
                      class="text-gray-800  hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                      onClick={() => setOpenMenuMobile(true)}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="w-8 h-8"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div class="hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                  <RenderMenu />
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
      <header class="text-gray-600 body-font  sticky top-0 z-20 bg-white">
        <div className="container">
          <Drawer
            placement={"left"}
            onClose={() => setOpenMenuMobile(false)}
            open={openMenuMobile}
            key={"left"}
            className="menu-mobile"
            width={"70%"}
          >
            <div className="flex flex-col items-center text-lg">
              {" "}
              <RenderMenu />
            </div>
          </Drawer>
        </div>
      </header>
    </>
  );
};

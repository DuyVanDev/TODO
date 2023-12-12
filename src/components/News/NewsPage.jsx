import { useEffect, useState } from "react";
import { FormatDateJsonPro } from "../../utils";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../hooks";
import { Avatar, Breadcrumb, Card } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const NewsPage = ({ isHome = false }) => {
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  console.log("news"+news)

  const RenderNew = () => {
    return news
      .filter((x) => x.Url === "/tin-tuc")
      .slice(0, isHome ? 3 : 10000)
      .map((x) => {
        return (
          <article
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            key={x.NewsId}
          >
            <Link className="" to={`/tin-tuc/${x.UrlDetail}`}>
              <img
                alt={x.NewsTitle}
                src={x.ImageNewsShow}
                class="h-56 w-full object-cover"
              />
            </Link>

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {FormatDateJsonPro(x.CreateOn)}
              </time>

              <Link className="" to={`/tin-tuc/${x.UrlDetail}`}>
                <h3 class="mt-0.5 text-lg text-gray-900 line-clamp-2">
                  {x.NewsTitle}
                </h3>
              </Link>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ">
                {x.NewsDescription}
              </p>
            </div>
          </article>
        );
      });
  };

  return (
    <div class="container py-5 mx-auto px-4 md:px-0">
      {!isHome ? (
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  {" "}
                  <HomeOutlined className="mr-2" />
                  Trang chủ
                </Link>
              ),
            },

            {
              title: "Bài viết",
            },
          ]}
        />
      ) : (
        <div>
          <h1 class="font-semibold text-4xl text-center text-main  lg:text-4xl">
            Những bài viết mới
          </h1>
          <div class="flex justify-center mx-auto mt-4">
            <span class="inline-block w-40 h-1 bg-main rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-main rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-main rounded-full"></span>
          </div>
        </div>
      )}

      {/* <div className="grid md:grid-cols-3 gap-4 mt-5">
        <RenderNew />
      </div> */}
    </div>
  );
};

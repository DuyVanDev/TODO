import React, { useEffect, useState } from "react";
import { FormatDateJsonPro } from "../../utils";
import { useGlobalState } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { Avatar, Breadcrumb, Card } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
export const NewsDetailPage = ({}) => {
  const { id } = useParams();
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const blog = news.find((x) => x.UrlDetail === id);
  const recentpost = news.filter(
    (x) => x.Url === "/tin-tuc" && x.UrlDetail !== id
  );

  return (
    <div>
      <Breadcrumb
        className="line-clamp-1"
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
            title: <Link to="/tin-tuc"> Bài viết</Link>,
          },
          {
            title: `${blog?.NewsTitle}`,
          },
        ]}
      />
      <section className="pb-11 ">
        <div className="">
          <div className="grid lg:grid-cols-[70%,1fr]  gap-4 mt-5 ">
            <div>
              <div className="">
                <img
                  src={blog?.ImageNewsShow}
                  alt=""
                  className="object-cover w-full rounded-md h-96"
                />
                <div className="flex mt-6 mb-4 ">
                  <a href="#" className="flex items-center mr-6 no-underline ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="text-main  bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="ml-2 text-sm text-main">Admin</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-black no-underline "
                  >
                    <span className="ml-2 text-sm text-main ">
                      {FormatDateJsonPro(blog?.CreateOn || new Date())}
                    </span>
                  </a>
                </div>
                <h2 className="mb-4 text-2xl font-semibold font-poppins text-slate-700">
                  {blog?.NewsTitle}
                </h2>

                <div className=" font-poppins ">
                  <div
                    dangerouslySetInnerHTML={{ __html: blog?.NewsContent }}
                  ></div>
                </div>
              </div>
              <div className="">
                <h2 className="pb-2 mt-4 text-lg font-semibold text-gray-900  font-poppins">
                  Tags
                </h2>
                <div className="w-16 mb-3 border-b-2 border-blue-500 dark:::border-gray-400 inset-px" />
                <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                  <a
                    className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 dark:::text-gray-100 dark:::bg-gray-600 dark:::hover:bg-gray-800 hover:text-white"
                    href="#"
                  >
                    Corporate
                  </a>
                  <a
                    className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white dark:::text-gray-100 dark:::bg-gray-600 dark:::hover:bg-gray-800"
                    href="#"
                  >
                    Business
                  </a>
                  <a
                    className="px-4 py-1 mb-2 text-xs text-black transition bg-gray-200 rounded-md btn btn-sm hover:bg-blue-500 hover:text-white dark:::text-gray-100 dark:::bg-gray-600 dark:::hover:bg-gray-800"
                    href="#"
                  >
                    Field
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-0">
              <div className="px-2 lg:px-0 dark:::border-gray-700">
                <div>
                  <h2 className="pb-2 text-lg font-semibold leading-5 tracking-tight text-gray-900 dark:::text-gray-300 ">
                    Recent Posts
                  </h2>
                  <div className="w-16 mb-5 border-b-2 border-blue-400 inset-px " />
                  {recentpost?.map((a) => {
                    return (
                      <div className="flex w-full mb-4 border-b border-gray-200 dark:::border-gray-700">
                        <Link className="" to={`/tin-tuc/${a.UrlDetail}`}>
                          <img
                            className="object-cover w-20 h-20 mr-4 rounded"
                            src={a.ImageNewsShow}
                            alt=""
                          />
                        </Link>
                        <div className="flex-1 mb-5">
                          <Link className="" to={`/tin-tuc/${a.UrlDetail}`}>
                            <h2 className="mb-1 text-base font-medium tracking-tight text-gray-700 hover:text-main  line-clamp-2">
                              {a.NewsTitle}
                            </h2>
                            <div className="flex items-center mr-6 no-underline ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="w-3 h-3 text-main dark:::text-blue-400 bi bi-calendar"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                              </svg>
                              <span className="ml-2 text-xs text-gray-500 dark:::text-blue-400 hover:text-main">
                                {FormatDateJsonPro(a.CreateOn)}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

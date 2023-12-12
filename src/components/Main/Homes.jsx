import { useRef } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GROUPID, callApi } from "../../services/Api";
import { Button, Carousel as Ca } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  LaptopOutlined,
  HeartOutlined,
  HomeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useGlobalState } from "../../hooks";
import { NewsPage } from "../../components";
export const Homes = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const footerImage = {
    visible: { y: 0, transition: { duration: 0.3 } },
    hidden: { y: -100 },
  };
  const carousel = useRef();
  const handleNext = () => carousel.current.next();

  const handlePrev = () => carousel.current.prev();

  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };
  const [DataSlider, setDataSlider] = useState([]);
  useEffect(() => {
    Shop_spWeb_Slides_List();
  }, []);

  //#region thông tin công ty
  const Shop_spWeb_Slides_List = async () => {
    const params2 = {
      Json: JSON.stringify({
        Domain: "",
        GroupId: GROUPID,
      }),
      func: "Shop_spWeb_Slides_List",
    };

    try {
      const result2 = await callApi.Main(params2);
      setDataSlider(result2);
    } catch (err) {
      console.log(err, "Shop_spWeb_Slides_List");
    }
  };
  //#endregion
  return (
    <header className="container mx-auto mt-5 px-4 md:px-0">
      <div className="font-medium text-center text-2xl md:text-4xl text-main mt-10">
        Nâng cao uy tín những nơi làm việc hàng đầu Việt Nam
      </div>
      <div className="md:grid md:grid-cols-3 gap-4 py-4 flex flex-col items-center justify-center">
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero1}
          alt="eclipse"
          className="h-64 "
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero2}
          alt="eclipse"
          className="h-64 "
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero3}
          alt="eclipse"
          className="h-64 "
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero4}
          alt="eclipse"
          className="h-64 "
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero5}
          alt="eclipse"
          className="h-64 "
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          variants={footerImage}
          src={setting?.Hero6}
          alt="eclipse"
          className="h-64 "
        />
      </div>
      <div className=" capitalize border-t-2 border-main md:my-10 my-5"></div>
      <div className="container grid justify-items-center ">
        <div className=" font-medium text-2xl md:text-4xl text-main text-center">
          {" "}
          Dịch vụ tổ chức sự kiện
        </div>
        <div className="font-semibold mt-2  text-center">
          {" "}
          Tư vấn và thực hiện những sự kiện mang lại trải nghiệm đáng nhớ
        </div>
        <div className="grid  md:grid-cols-5 gap-8 justify-items-center py-4">
          <div className=" md:col-span-3">
            <motion.img
              initial="hidden"
              whileInView="visible"
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
              variants={footerImage}
              src="/m1.jpg"
              alt="eclipse"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center gap-10">
            <div className="">
              <span className="inline-block p-3 bg-cyan-100 text-main rounded-full hover:animate-spin">
                <i className="text-3xl fa-solid fa-snowflake"></i>
              </span>
              <div className=" font-medium text-1xl text-main">
                {" "}
                Chuyên nghiệp
              </div>
              <div className="">
                {" "}
                Thiết kế và lên ý tưởng sáng tạo cùng đội ngũ quản lý sự kiện
                chuyên nghiệp.
              </div>
            </div>
            <div className="">
              <span className="inline-block p-3 bg-teal-100 text-green-500 rounded-full hover:animate-spin">
                <i className="text-3xl fa-solid fa-snowflake"></i>
              </span>
              <div className=" font-medium text-1xl text-main"> Hào hứng</div>
              <div className="">
                {" "}
                Các hoạt động chương trình mang lại sự hứng khởi, vui tương cho
                khách tham dự.
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1344px] capitalize border-t-2 border-main my-5 md:my-10"></div>
        <div className=" font-medium text-4xl text-main pb-5">
          {" "}
          Liên hệ Snowball
        </div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          variants={footerImage}
          src="/g1.jpg"
          alt="eclipse"
        />
        <div className="grid md:grid-cols-2 gap-8 justify-items-center py-14">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={footerContent}
                className="flex flex-col items-center hover:scale-105 duration-1000"
              >
                <div className="border divide-gray-400 hover:bg-yellow-400">
                  <div className="p-4">
                    <span className="inline-block p-3 bg-cyan-100 text-cyan-600 rounded-full bg-cyan-100">
                      <i className="text-3xl fa-solid fa-couch"></i>
                    </span>
                    <div className=" font-medium text-1xl text-main my-4">
                      {" "}
                      Super Creative
                    </div>
                    <div className="">
                      {" "}
                      Digital transformation describes an organisation making a
                      fundamental change from its current state.
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
            <div>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={footerContent}
                className="flex flex-col items-center hover:scale-105 duration-1000"
              >
                <div className="border divide-gray-400 hover:bg-purple-400">
                  <div className="p-4">
                    <span class="inline-block p-3 bg-purple-100 text-purple-600 rounded-full">
                      <i class="text-3xl fa-solid fa-stopwatch"></i>
                    </span>
                    <div className=" font-medium text-1xl text-main my-4">
                      {" "}
                      Avant Garde
                    </div>
                    <div className="">
                      {" "}
                      We can change the way your business thinks and behaves
                      long-term in order to combat the threat of digital
                      disruption.
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
            <div>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={footerContent}
                className="flex flex-col items-center  hover:scale-105 duration-1000"
              >
                <div className="border divide-gray-400 hover:bg-teal-400">
                  <div className="p-4">
                    <span class="inline-block p-3 bg-teal-100 text-green-500 rounded-full bg-emerald-100">
                      <i className="text-3xl fa-regular fa-clock"></i>
                    </span>
                    <div className=" font-medium text-1xl text-main my-4">
                      {" "}
                      Feature-driven
                    </div>
                    <div className="">
                      It’s also a cultural change, a shift in mindset where the
                      whole company supports a new way of thinking.
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
            <div>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={footerContent}
                className="flex flex-col items-center  hover:scale-105 duration-1000"
              >
                <div className="border divide-gray-400 hover:bg-fuchsia-400">
                  <div className="p-4">
                    <span className="inline-block p-3 bg-teal-100 text-teal-600 rounded-full">
                      <i className="text-3xl fa-solid fa-pizza-slice"></i>
                    </span>
                    <div className=" font-medium text-1xl text-main my-4">
                      {" "}
                      Fox in the Box
                    </div>
                    <div className="">
                      We will work with you as the business transforms into one
                      that is efficient, customer-centric.{" "}
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
          <div className="">
            <div className=" font-medium text-2xl md:text-4xl text-main pb-5">
              {" "}
              Giải thưởng Asia Pacific Enterprise Awards 2023 (APEA)
            </div>
            <div>
              {" "}
              Được tổ chức bởi Enterprise Asia (Hiệp hội Doanh nghiệp Châu Á) từ
              năm 2007 nhằm công nhận những Doanh nghiệp kinh doanh bền vững tại
              Khu vực Châu Á.
            </div>
            <button className=" mt-4 flex items-center justify-center rounded-full border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-500">
              Take 1-min Tour
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1344px] capitalize border-t-2 border-main my-5 md:my-10"></div>
      <div className="container grid justify-items-center mb-5">
        <div className=" font-medium text-2xl md:text-4xl text-center text-main">
          {" "}
          Chiến dịch truyền thông truyền thống
        </div>
        <div>See what people have to say about our product </div>
      </div>
      <div className="container relative">
        <Ca autoplay ref={carousel} dots={"bg-red-500"}>
          {DataSlider.map((itm, Key) => {
            return (
              <div>
                <section className="text-slate-900 bg-white body-font">
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    src={itm.Links + itm.ImageShow}
                    alt="eclipse"
                    className=" object-center  w-full"
                  />
                </section>
              </div>
            );
          })}
        </Ca>
        <Button
          className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2"
          size="small"
          shape="circle"
          onClick={handlePrev}
          icon={<LeftOutlined />}
        ></Button>
        <Button
          className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
          onClick={handleNext}
          size="small"
          shape="circle"
          icon={<RightOutlined />}
        ></Button>
      </div>
      <div className="container mx-auto max-w-[1344px] capitalize border-t-2 border-main my-5 md:my-10"></div>
      <div className="container grid justify-items-center ">
        <div className=" font-medium text-2xl md:text-4xl text-center text-main">
          {" "}
          Chiến dịch truyền thông trực tuyến (digital)
        </div>
        <div>Brands we've successfully made along the way </div>

        <div className="columns-3xs py-5 md:py-10">
          <motion.img
            className="w-full aspect-video object-cover cursor-grab"
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            src="/g1.jpg"
            alt="eclipse"
          />
          <motion.img
            className="w-full aspect-square mt-4  object-cover  cursor-grab"
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            src="/g1.jpg"
            alt="eclipse"
          />
          <motion.img
            className="w-full aspect-square  object-cover  cursor-grab"
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            src="/g1.jpg"
            alt="eclipse"
          />
          <motion.img
            className="w-full aspect-video mt-4  object-cover  cursor-grab"
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            src="/g1.jpg"
            alt="eclipse"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 border border-inherit mt-20">
          <motion.img
            initial="hidden"
            whileInView="visible"
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
            variants={footerImage}
            src="/1scaled.jpg"
            alt="eclipse"
            className="object-cover max-h-96 w-full"
          />
          <div className=" p-5">
            <div className=" font-medium text-4xl text-main">
              {setting.Contentproduction?.Description}
            </div>
            <p className="leading-relaxed text-lg mt-10">
              {setting.Contentproduction?.DataSetting}
            </p>
            <button className=" mt-4 flex items-center justify-center rounded-full border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-500">
              Discover More
            </button>
          </div>
        </div>
        <div className=" font-medium text-4xl text-main mt-20 text-center">
          {" "}
          Con số thể hiện nỗ lực
        </div>
        <div className=" text-center">
          We’re hustlers, we get shit done no matter what{" "}
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-20">
          <div className="relative mb-12 px-3 lg:mb-0 grid justify-items-center">
            <div className="absolute left-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block"></div>
            <div className="mb-2 p-3 rounded-full bg-sky-100">
              <span className=" text-main ">
                <LaptopOutlined className="text-4xl" />
              </span>
            </div>
            <h5 className="mb-6 font-bold  text-main">5000+</h5>
            <h6 className="mb-0 font-normal  text-gray-500">Khách hàng</h6>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block"></div>
          </div>
          <div className="relative mb-12 px-3 lg:mb-0 grid justify-items-center">
            <div className="mb-2  p-3 rounded-full bg-sky-100">
              <span className=" text-main">
                <HomeOutlined className="text-4xl" />
              </span>
            </div>
            <h5 className="mb-6 font-bold  text-main">34+</h5>
            <h6 className="mb-0 font-normal text-gray-500">Cloud Apps Built</h6>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block"></div>
          </div>
          <div className="relative mb-12 px-3 lg:mb-0 grid justify-items-center">
            <div className="mb-2 p-3 rounded-full bg-sky-100">
              <span className="text-main">
                <ClockCircleOutlined className="text-4xl" />
              </span>
            </div>
            <h5 className="mb-6 font-bold  text-main">72+</h5>
            <h6 className="mb-0 font-normal text-gray-500">Projects Complated</h6>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block"></div>
          </div>
          <div className="relative mb-12 px-3 lg:mb-0 grid justify-items-center">
            <div className="mb-2  p-3 rounded-full bg-sky-100">
              <span className=" text-main">
                <HeartOutlined className="text-4xl" />
              </span>
            </div>
            <h5 className="mb-6 font-bold  text-main">14K</h5>
            <h6 className="mb-0 font-normal  text-gray-500">Likes on Dribbble</h6>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block"></div>
          </div>
        </div>
      </div>
      <NewsPage isHome={true} />
    </header>
  );
};

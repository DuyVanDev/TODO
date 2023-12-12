import { useRef } from "react";
import { motion } from "framer-motion";
import { useGlobalState } from "../../hooks";

export const Banner = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };
  const arrow = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.4 } },
  };
  const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 },
  };

  return (
    <header className="w-full">
      <nav className="bg-gradient-to-r from-cyan-200 to-fuchsia-200 h-full w-full">
        <div className="container  mx-auto">
          <div class="grid  md:grid-cols-2 gap-4  items-center  h-screen px-8 md:px-0 ">
            <div class="flex flex-col gap-5">
              <div className="text-5xl md:text-6xl text-fuchsia-700 font-semibold">
                Giải thưởng HR Asia 2023
              </div>
              <div className="text-gray-500 text-lg">
                Công nhận những nơi làm việc tốt tại Châu Á năm 2023 dành cho
                doanh nghiệp có trụ sở tại Việt Nam.
              </div>
              <button className="flex items-center w-fit justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500">
                Tìm hiểu ngay
              </button>
            </div>
            {/* <div class="w-full h-[500px] border image-style bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="w-full h-[500px] border image-style bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat"
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                // repeat: Infinity,
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            />
            {/* </div> */}
          </div>
        </div>
        {/* <div className="capitalize border-b-2 border-orange-600 ml-5 mr-6"></div> */}
      </nav>
    </header>
  );
};

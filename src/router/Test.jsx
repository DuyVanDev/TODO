import React from "react";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const categories = ["Home", "Home", "Home", "Home", "Home", "Home"];

const Test = () => (
  <Layout className="px-8 ">
    <Header className="flex items-center justify-between bg-slate-800 rounded-b-lg">
      <div className="logo">
        <div>Benefit</div>
      </div>
      <div className="flex items-center justify-between gap-8">
        {categories.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-8 ">
        <div>Sign in</div>
        <div className="bg-blue-600 text-white rounded-2xl  h-8 items-center flex px-2">
          Get Started
        </div>
      </div>
    </Header>

    <Content>
      <div className="grid grid-cols-12 my-[50px] max-h-[300px]">
        <h1 className="col-span-6 text-6xl font-bold">
          Professional marketing copy for anyone{" "}
        </h1>
        <img
          className="col-span-6 w-full h-[300px]"
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="image"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>Our Services</h2>
        <p className="text-3xl font-bold">We're digital marketing pro</p>
        <p className="text-center">
          No matter what you're looking for, we can create a<br />  custom solution for
          your business.
        </p>
      </div>

      <div className="flex">
        <div className="">item1</div>
        <div className="">item2</div>
        <div className="">item3</div>
      </div>
    </Content>
   
  </Layout>
);

export default Test;

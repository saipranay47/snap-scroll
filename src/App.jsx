import React from "react";
import SectionComp from "./components/SectionComp";
import Madeby from "./assets/madebypranay.svg";

function App() {
  return (
    <div className="bg-black p-10 overflow-y-scroll h-screen scroll-pt-6 snap-y snap-mandatory">
      <div className="flex flex-col gap-10">
        <SectionComp bgColor="bg-[#e14842]" textColor="text-[#f7bb2e]" />
        <SectionComp bgColor="bg-[#1d7948]" textColor="text-[#ddea90]" />
        <SectionComp bgColor="bg-[#2c3950]" textColor="text-[#f7d5b1]" />
        <SectionComp bgColor="bg-[#614f89]" textColor="text-[#fea4b9]" />
      </div>
      <a
        href="https://saipranay.vercel.app/"
        target="_blank"
        className="fixed bottom-10 right-10"
      >
        <img
          src={Madeby}
          alt="sai pranay portfolio redirect"
          className="fixed bottom-8 right-8 w-60"
        />
      </a>
    </div>
  );
}

export default App;

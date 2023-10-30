import React from "react";

function SectionComp({ bgColor, textColor }) {
  return (
    <div
      className={`${bgColor} ${textColor} h-[95vh] p-6 rounded-[30px] w-full snap-start`}
    >
      <div className="h-full flex-col justify-end items-start flex">
        <h1 className="tracking-[-0.03em] text-9xl leading-none font-medium">
          Snap <br /> Scrolling
        </h1>
      </div>
    </div>
  );
}

export default SectionComp;

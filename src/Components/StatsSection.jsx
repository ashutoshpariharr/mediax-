import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <div className="w-full h-auto bg-gray-100 flex flex-wrap justify-around items-center p-4 md:p-8">
      <div className="text-center mb-6 md:mb-0">
        {/* <h2 className="text-5xl md:text-6xl font-extrabold text-orange-500 leading-tight"> */}
        <h2 className="relative text-6xl font-bold text-transparent bg-white bg-clip-text" style={{ WebkitTextStroke: "2px #F05A2D" }}>
          <CountUp end={100} duration={2.5} />%
        </h2>
        <p className="text-base md:text-lg font-medium mt-2">
          Placement Assistance
        </p>
      </div>

      <div className="text-center mb-6 md:mb-0">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent leading-tight" style={{ WebkitTextStroke: "2px #F05A2D" }}>
          <CountUp end={90} duration={2.5} />%
        </h2>
        <p className="text-base md:text-lg font-medium mt-2">
          University Exam Results
        </p>
      </div>

      <div className="text-center mb-6 md:mb-0">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent leading-tight" style={{ WebkitTextStroke: "2px #F05A2D" }}>
          <CountUp end={100} duration={2.5} />+
        </h2>
        <p className="text-base md:text-lg font-medium mt-2">
          Faculty Members
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent leading-tight" style={{ WebkitTextStroke: "2px #F05A2D" }}>
          <CountUp end={90} duration={2.5} />%
        </h2>
        <p className="text-base md:text-lg font-medium mt-2">
          Placement Track Record
        </p>
      </div>
    </div>
  );
};

export default StatsSection;

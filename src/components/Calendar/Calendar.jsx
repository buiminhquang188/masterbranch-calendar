import React from "react";
import CalendarLeft from "./CalendarLeft/CalendarLeft";
import CalendarRight from "./CalendarRight/CalendarRight";

export default function Calendar() {
  return (
    <div className="calendar">
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <CalendarLeft />
          </div>
          <div className="col-span-8">
            <CalendarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

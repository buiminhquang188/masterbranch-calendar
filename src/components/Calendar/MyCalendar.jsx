import React, { useState } from "react";
import CalendarRight from "./CalendarRight/CalendarRight";
import { Calendar } from "antd";
import { VideoCameraIcon } from "@heroicons/react/outline";
import moment from "moment";
import "./MyCalendar.scss";

export default function MyCalendar() {
  const [data, setData] = useState({
    data: null,
  });

  function onPanelChange(value, mode) {
    setData({
      data: moment(value).format("YYYY-MM-DD"),
    });
  }

  const callBack = (value) => {
    setData({
      data: value,
    });
  };

  console.log("render mycalendar");
  return (
    <div className="calendar bg-title h-screen py-2">
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl mx-auto container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="calendarleft">
              <div className="site-calendar-demo-card">
                <Calendar
                  value={data.data ? moment(data.data) : moment(new Date())}
                  onChange={onPanelChange}
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  locale={{
                    lang: {
                      locale: "en",
                      dayFormat: moment.updateLocale("en", {
                        weekdaysMin: [
                          "SUN",
                          "MON",
                          "TUE",
                          "WED",
                          "THU",
                          "FRI",
                          "SAT",
                        ],
                      }),
                    },
                  }}
                />
              </div>
              <div className="calendarleft__upcoming">
                <div className="calendarleft__wrapper p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl text-blue-950 font-bold">
                        Upcoming Events
                      </h2>
                    </div>
                    <div>
                      <button className="px-6 py-2 text-white bg-blue-950 hover:bg-blue-450 rounded-full">
                        View All
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <h3 className="text-xl text-left text-gray-400 font-semibold">
                      Today, 4 Apr
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="p-2 border-l-8 border-blue-950 rounded-lg bg-red-450 hover:bg-blue-450 hover:border-red-450 group cursor-pointer">
                      <div className="flex justify-between">
                        <div className="text-base">
                          <h6 className="text-blue-950 group-hover:text-white">
                            First Session with Alex Stand
                          </h6>
                          <p className="text-blue-950 text-left mb-2 group-hover:text-red-450">
                            9:00 AM - 10:00 AM GMT+8
                          </p>
                          <div className="flex justify-start items-center content-center gap-2 ml-1">
                            <div>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={`https://i.pravatar.cc/300`}
                                alt="client"
                              />
                            </div>
                            <div>
                              <p className="text-blue-950 group-hover:underline cursor-pointer my-auto group-hover:text-red-450">
                                View Client Profile
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="w-12 h-12 border-2 bg-blue-950 rounded-full border-blue-950 group-hover:bg-red-450 group-hover:border-red-450">
                            <VideoCameraIcon className="w-8 h-full text-white mx-auto py-auto block group-hover:text-blue-450" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-l-8 border-blue-450 rounded-lg bg-red-450 bg-opacity-40">
                      <div className="flex">
                        <div className="text-base text-left">
                          <h6 className="text-blue-950 ml-1">
                            Webinar: How to cope with trauma in professional
                            life
                          </h6>
                          <p className="text-gray-400 mb-2">
                            9:00 AM - 10:00 AM GMT+8
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-l-8 border-blue-950 rounded-lg bg-red-450 hover:bg-blue-450 hover:border-red-450 group cursor-pointer">
                      <div className="flex justify-between">
                        <div className="text-base">
                          <h6 className="text-blue-950 group-hover:text-white">
                            Chemistry Session with Alex Stand
                          </h6>
                          <p className="text-blue-950 text-left mb-2 group-hover:text-red-450">
                            9:00 AM - 10:00 AM GMT+8
                          </p>
                          <div className="flex justify-start items-center content-center gap-2 ml-1">
                            <div>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={`https://i.pravatar.cc/300`}
                                alt="client"
                              />
                            </div>
                            <div>
                              <p className="text-blue-950 group-hover:underline cursor-pointer my-auto group-hover:text-red-450">
                                View Client Profile
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="w-12 h-12 border-2 bg-blue-950 rounded-full border-blue-950 group-hover:bg-red-450 group-hover:border-red-450">
                            <VideoCameraIcon className="w-8 h-full text-white mx-auto py-auto block group-hover:text-blue-450" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <CalendarRight dataChange={data.data} callBack={callBack} />
          </div>
        </div>
      </div>
    </div>
  );
}

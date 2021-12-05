import React, { useState, memo } from "react";
import { Calendar, Badge, Select } from "antd";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import "./CalendarRight.scss";
import moment from "moment";

const { Option } = Select;

function getListData(value) {
  let listData;
  console.log(value.month())
  switch (value.date()) {
    case 8:
      listData = [
        { type: "Appointment", content: "First Session with Alex Stand." },
        {
          type: "Event",
          content: "Webinar: How to cope with trauma in professional life",
        },
      ];
      break;
    case 10:
      listData = [
        { type: "Appointment", content: "First Session with Alex Stand." },
        {
          type: "Event",
          content: "Webinar: How to cope with trauma in professional life",
        },
      ];
      break;
    case 15:
      listData = [
        { type: "Appointment", content: "First Session with Alex Stand." },
        { type: "Event", content: "This is very long usual event。。...." },
      ];
      break;
    default:
  }
  return listData || [];
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function CalendarRight(props) {
  const [date, setDate] = useState({
    value: moment(moment(new Date()).format("YYYY-MM-DD")),
    selectedValued: moment(new Date()),
    isLoading: false,
    isClicked: false,
  });

  const onSelect = (value) => {
    setDate({
      value,
      selectedValue: value,
    });
    props.callBack(value.format("YYYY-MM-DD"));
  };

  const onPanelChange = (value) => {
    setDate({ value });
  };

  const handleChangeMonthNP = (value) => {
    let currentMonth = date.value;
    if (value) {
      let futureMonth = moment(currentMonth).add(1, "M").format("YYYY-MM-DD");
      setDate({
        value: moment(futureMonth),
        isClicked: true,
      });
      props.callBack(futureMonth);
    } else {
      let pastMonth = moment(currentMonth)
        .subtract(1, "M")
        .format("YYYY-MM-DD");
      setDate({
        value: moment(pastMonth),
        isClicked: true,
      });
      props.callBack(pastMonth);
    }
  };

  const handleCurrentDay = () => {
    setDate({
      value: moment(moment(new Date()).format("YYYY-MM-DD")),
      isClicked: true,
    });
    props.callBack(date.value.format("YYYY-MM-DD"));
    setDate({
      ...date,
      isClicked: false,
    });
  };
  return (
    <div className="calendarright">
      <Calendar
        headerRender={({ value, type, onChange, onTypeChange }) => {
          return (
            <div className="calendaerright__header">
              <div className="flex p-4 text-sm">
                <div>
                  <button
                    className="px-6 py-1 border-2 border-blue-450 rounded-lg cursor-pointer hover:text-blue-450"
                    onClick={() => handleCurrentDay()}
                  >
                    Today
                  </button>
                </div>
                <div className="w-6 h-6 my-auto cursor-pointer ml-4">
                  <ChevronLeftIcon
                    className="w-full h-full text-blue-450 hover:text-blue-950"
                    onClick={() => handleChangeMonthNP(false)}
                  />
                </div>
                <div className="w-6 h-6 my-auto cursor-pointer ml-4 mr-4">
                  <ChevronRightIcon
                    className="w-full h-full text-blue-450 hover:text-blue-950"
                    onClick={() => handleChangeMonthNP(true)}
                  />
                </div>
                <div className="text-2xl self-center font-bold text-blue-950">
                  {date.value.format("MMM")}
                </div>
                <div className="ml-2 self-center text-2xl  font-bold text-blue-950">
                  {date.value.format("YYYY")}
                </div>
                <div className="ml-auto">
                  <Select
                    defaultValue="month"
                    onChange={(e) => onTypeChange(e)}
                    className="calenderright__select"
                  >
                    <Option value="month">Month</Option>
                    <Option value="year">Year</Option>
                  </Select>
                </div>
              </div>
            </div>
          );
        }}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        value={
          date.isClicked
            ? date.value
            : props.dataChange && moment(props.dataChange)
        }
      />
    </div>
  );
}

export default memo(CalendarRight);

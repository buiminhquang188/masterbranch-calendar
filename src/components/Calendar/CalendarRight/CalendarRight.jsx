import React, { useState, memo } from "react";
import { Calendar, Badge, Select } from "antd";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import "./CalendarRight.scss";
import moment from "moment";

const { Option } = Select;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
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
    console.log(value);
    let currentMonth = date.value;
    if (value) {
      console.log("value state", date.value.format("YYYY-MM-DD"));
      let futureMonth = moment(currentMonth).add(1, "M").format("YYYY-MM-DD");
      setDate({
        value: moment(futureMonth),
      });
    } else {
      let pastMonth = moment(currentMonth)
        .subtract(1, "M")
        .format("YYYY-MM-DD");
      setDate({
        value: moment(pastMonth),
      });
    }
  };

  const handleChangeMonth = (value) => {
    console.log(value);
  };
  console.log("render calendarright");
  return (
    <div className="calendarright">
      <Calendar
        headerRender={({ value, type, onChange, onTypeChange }) => {
          return (
            <div className="calendaerright__header">
              <div className="flex p-4 text-lg">
                <div>Today</div>
                <div className="w-4 h-4 my-auto cursor-pointer ml-4">
                  <ChevronLeftIcon
                    className="w-full h-full"
                    onClick={() => handleChangeMonthNP(false)}
                  />
                </div>
                <div className="w-4 h-4 my-auto cursor-pointer ml-4 mr-4">
                  <ChevronRightIcon
                    className="w-full h-full"
                    onClick={() => handleChangeMonthNP(true)}
                  />
                </div>
                <div>
                  <Select
                    value={date.value.format("MMMM")}
                    style={{ width: 120 }}
                    onChange={handleChangeMonth}
                  >
                    {moment.months().map((item) => (
                      <Option key={item}>{item}</Option>
                    ))}
                  </Select>
                </div>
                <div className="ml-2">2021</div>
                <div className="ml-auto">
                  <Select
                    defaultValue="month"
                    onChange={(e) => onTypeChange(e)}
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
      />
    </div>
  );
}

export default memo(CalendarRight);

import React from "react";
import { Calendar } from "antd";
import "./CalendarLeft.scss";

export default function CalendarLeft() {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <div className="calendarleft">
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
}

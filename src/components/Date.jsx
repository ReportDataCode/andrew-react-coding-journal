import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="Date">
      <DatePicker
        className="gold"
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          let x = (document.getElementsByClassName("gold")[0].value = date);
          alert(x);
        }}
      />
    </div>
  );
}

export default Date;

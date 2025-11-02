import React from "react";
import DayEdit from "./DayEdit";

const DayIcon = ({site, year, month, day, qty, handleOpen, setView}) => {
    const qtyy = localStorage.getItem(site+year+month+day)
  return (
    <div className="flex w-1/6 flex-col py-2 px-3 bg-amber-100 rounded mx-1 my-1 text-center" onClick={()=>{
        handleOpen()
        setView(site+year+month+day)
    }}>
      <span className="font-bold">{day}</span>
      <span className="text-xs">{qtyy}</span>
    </div>
  );
};

export default DayIcon;

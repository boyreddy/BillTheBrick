import { useEffect, useState } from "react";
import DayIcon from "./DayIcon";
import DayEdit from "./DayEdit";

const DayBoard = ({ site, year, month, lastDay }) => {
  const [records, setRecords] = useState(new Array(lastDay).fill(0));
  const [open, setOpen] = useState(false);

  const [view, setView] = useState(site+year+month+1)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (localStorage.getItem(site+year + month) !== null)
      setRecords(localStorage.getItem(site+year + month));
  }, []);

  return (
    <div className="flex flex-row flex-wrap mx-auto w-100">
      {records.map((k, ind) => (
        <DayIcon site={site} year={year} month={month} setView={setView} key={k+ind} day={ind + 1} qty={k} isOpen={open} handleOpen={handleOpen} onClose={handleClose} />
      ))}
      <DayEdit view={view} isOpen={open} onClose={handleClose}></DayEdit>
    </div>
  );
};

export default DayBoard;

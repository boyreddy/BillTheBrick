import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import DayBoard from "./DayBoard";
import MonthTotal from "./MonthTotal";
import Invoice from "./Invoice";

function App() {
  const [year, setYear] = useState(localStorage.getItem("year"));
  const [month, setMonth] = useState(localStorage.getItem("month"));
  const [site, setSite] = useState(localStorage.getItem("site"));

  const [invoice, setInvoice] = useState(false);
  const [second, setSecond] = useState(false);

  const [rate, setRate] = useState(12.5);

  const isLeapYear = year % 4 == 0;

  const lastDay =
      month == "Jan" ||
      month == "Mar" ||
      month == "May" ||
      month == "Jul" ||
      month == "Aug" ||
      month == "Oct" ||
      month == "Dec"
        ? 31
        : month == "Feb"
        ? isLeapYear
          ? 29
          : 28
        : 30;

  useEffect(() => {
    if (year === null) localStorage.setItem("year", Date().substring(11, 15));
    if (month === null) localStorage.setItem("month", Date().substring(4, 7));
    if (site === null) localStorage.setItem("site", "PRIMARK");
  }, [year, month, site]);

  return !invoice ? (
    <div className="mx-auto w-80">
      <Navbar
        year={year}
        month={month}
        setYear={setYear}
        site={site}
        setMonth={setMonth}
        setSite={setSite}
      />
      <DayBoard year={year} month={month} site={site} lastDay={lastDay} />
      <hr />
      <MonthTotal year={year} month={month} site={site} rate={rate} setRate={setRate} />
      <hr />
      <div className="flex justify-between mt-2 w-100 mx-auto">
        <button
          className="p-1 rounded bg-amber-200"
          onClick={() => {
            setSecond(!second);
          }}
        >
          {second ? "16th - 31st" : "1st - 15th"}
        </button>
        <button
          className="p-1 bg-amber-200 rounded mx-auto"
          onClick={() => setInvoice(true)}
        >
          View Invoice
        </button>
      </div>
    </div>
  ) : (
    <div className="w-100 mx-auto">
      <Invoice
        second={second}
        setSecond={setSecond}
        year={year}
        site={site}
        month={month}
        rate={rate}
        setRate={setRate}
      />
    </div>
  );
}

export default App;

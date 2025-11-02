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
      <DayBoard year={year} month={month} site={site} />
      <hr />
      <MonthTotal year={year} month={month} site={site} />
      <hr />
      <div className="flex justify-between mt-2">
        <button
          className="p-1 rounded bg-amber-50"
          onClick={() => {
            setSecond(!second);
          }}
        >
          {second ? "16th - 31st" : "1st - 15th"}
        </button>
        <button
          className="p-1 bg-amber-200 rounded m-1 mx-auto"
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
      />
    </div>
  );
}

export default App;

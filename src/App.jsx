import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import DayBoard from "./DayBoard";
import MonthTotal from "./MonthTotal";
import Invoice from "./Invoice";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddNewSite from "./AddNewSite";
import Home from "./Home";

import {Toaster} from 'react-hot-toast';

function App() {
  const [year, setYear] = useState(localStorage.getItem("year"));
  const [month, setMonth] = useState(localStorage.getItem("month"));
  const [site, setSite] = useState(localStorage.getItem("site"));

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BillTheBrick">
          <Route path="/BillTheBrick/" element={<Home />} />
          <Route
            path="/BillTheBrick/invoice"
            element={
              <Invoice
                year={year}
                month={month}
                second={second}
                rate={rate}
                setRate={setRate}
                site={site}
              />
            }
          />
          <Route path="/BillTheBrick/add-site" element={<AddNewSite />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

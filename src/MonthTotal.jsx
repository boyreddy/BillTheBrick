import React from "react";

const MonthTotal = ({ site, year, month, rate, setRate }) => {
  const total = Object.keys(localStorage)
    .filter((k) => new RegExp(`^${site}${year}${month}\\d+$`).test(k))
    .reduce((sum, k) => sum + Number(localStorage.getItem(k) || 0), 0);

  // console.log('November total:', total);

  return (
    <div className="">
      <hr className="mt-2" />
      Total No. Of Pallets:
      <span className="font-bold">{total}</span>
      <hr />
      Rate per Pallet: <input type="number" value={rate}
      className="font-bold"
      onChange={(e)=>{
        setRate(e.target.value)
      }} />
      <hr />
      Total Bill:
      <span className="font-bold">{total * rate}</span>
      <hr />
    </div>
  );
};

export default MonthTotal;

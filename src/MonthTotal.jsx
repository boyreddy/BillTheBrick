import React from "react";

const MonthTotal = ({ site, year, month }) => {
  const total = Object.keys(localStorage)
    .filter((k) => new RegExp(`^${site}${year}${month}\\d+$`).test(k))
    .reduce((sum, k) => sum + Number(localStorage.getItem(k) || 0), 0);

  // console.log('November total:', total);

  return (
  <div>
    Total No. Of Pallets: {total}
    <hr />
    Total Bill: {total*12.5}
</div>
);
};

export default MonthTotal;

// import React, { useState } from "react";

// const Invoice = ({ site, year, month, second }) => {
//   const [rate, setRate] = useState(12.5);
//   const records = Object.keys(localStorage).filter((k) =>
//     new RegExp(`^${site}${year}${month}\\d+$`).test(k)
//   );
//   const total = Object.keys(localStorage)
//     .filter((k) => new RegExp(`^${site}${year}${month}\\d+$`).test(k))
//     .reduce((sum, k) => sum + Number(localStorage.getItem(k) || 0), 0);
//   //   console.log(total);
//   return (
//     <div className="w-90 ml-26 mx-auto">
//       <h1 className="font-bold">KSR Manpower Supply</h1>
//       <h1>Invoice</h1>
//       <h1>
//         {site} - {year} - {month}
//       </h1>
//       {/* <p className="bg-amber-50">{total}</p> */}
//       <div>
//         <table className="border">
//           <tr className="border">
//             <th className="border text-center px-1">S.No</th>
//             <th className="border text-center px-1">Date</th>
//             <th className="border text-center px-1">No. of Pallets</th>
//           </tr>
//           {records.map((entry, ind) => {
//             return second && ind >= 15 ? (
//               <tr key={entry} className="border">
//                 <td className="border text-center px-1">{ind - 14}</td>
//                 <td className="border text-center px-1">
//                   {ind + 1 + " " + month + " " + year}
//                 </td>
//                 <td className="text-center border px-1">
//                   {localStorage.getItem(entry)}
//                 </td>
//               </tr>
//             ) : !second ? (
//               <tr key={entry} className="border">
//                 <td className="border text-center px-1">{ind + 1}</td>
//                 <td className="border text-center px-1">
//                   {ind + 1 + " " + month + " " + year}
//                 </td>
//                 <td className="text-center border px-1">
//                   {localStorage.getItem(entry)}
//                 </td>
//               </tr>
//             ) : (
//               <></>
//             );
//           })}
//           <tr>
//             <th className="text-center border px-1" colSpan={2}>
//               Total Pallets:
//             </th>
//             <th className="text-center border px-1">{total}</th>
//           </tr>
//         </table>
//       </div>
//       <p className="mt-1">
//         Rate per Pallet:{" "}
//         <input
//           className="rounded px-1 mt-1"
//           type="number"
//           value={rate}
//           onChange={(e) => {
//             setRate(e.target.value);
//           }}
//         />
//       </p>
//       <p className="mt-1 font-bold">
//         <span className="">Total Bill:</span> Rs. {total * rate}
//       </p>
//     </div>
//   );
// };

// export default Invoice;

import React, { useState } from "react";

const Invoice = ({ site, year, month, second }) => {
  const [rate, setRate] = useState(12.5);

  // Filter and sort records matching the site, year, and month
  const records = Object.keys(localStorage)
    .filter((k) => new RegExp(`^${site}${year}${month}\\d+$`).test(k))
    .sort((a, b) => {
      const dayA = parseInt(a.match(/\d+$/)[0], 10);
      const dayB = parseInt(b.match(/\d+$/)[0], 10);
      return dayA - dayB;
    });

  // Filter records based on second prop
  const displayedRecords = second
    ? records.filter((_, ind) => ind >= 15 && ind < 31) // Days 16 to 31
    : records.filter((_, ind) => ind < 15); // Days 1 to 15

  // Calculate total pallets for displayed records only
  const total = displayedRecords.reduce(
    (sum, k) => sum + Number(localStorage.getItem(k) || 0),
    0
  );

  return (
    <div className="w-90 ml-26 mx-auto">
      <h1 className="font-bold">KSR Manpower Supply</h1>
      <h1>Invoice</h1>
      <h1>
        {site} - {year} - {month}
      </h1>
      <div>
        <table className="border">
          <thead>
            <tr className="border">
              <th className="border text-center px-1">S.No</th>
              <th className="border text-center px-1">Date</th>
              <th className="border text-center px-1">No. of Pallets</th>
            </tr>
          </thead>
          <tbody>
            {displayedRecords.map((entry, ind) => {
              const day = parseInt(entry.match(/\d+$/)[0], 10);
              return (
                <tr key={entry} className="border">
                  <td className="border text-center px-1">
                    {second ? ind + 1 : ind + 1}
                  </td>
                  <td className="border text-center px-1">
                    {day} {month} {year}
                  </td>
                  <td className="text-center border px-1">
                    {localStorage.getItem(entry)}
                  </td>
                </tr>
              );
            })}
            <tr>
              <th className="text-center border px-1" colSpan={2}>
                Total Pallets:
              </th>
              <th className="text-center border px-1">{total}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-1">
        Rate per Pallet:{" "}
        <input
          className="rounded px-1 mt-1"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </p>
      <p className="mt-1 font-bold">
        <span>Total Bill:</span> Rs. {total * rate}
      </p>
    </div>
  );
};

export default Invoice;
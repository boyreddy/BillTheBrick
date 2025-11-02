// Modal.js

import React, { useEffect, useState } from "react";

const DayEdit = ({ isOpen, onClose, view, children }) => {
  if (!isOpen) return null;

  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(view) === null) localStorage.setItem(view, 0);
    setQty(localStorage.getItem(view));
  }, []);

  return (
    <div
      // onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        <div className="flex flex-row justify-between">
          <h1>{view}</h1>
          <button className="bg-red-400 rounded" onClick={onClose}>
            Close
          </button>
        </div>
        <p className="mt-2">
          No. of Pallets:
          <input
            className="bg-amber-100 rounded p-1 "
            type="number"
            value={qty==0?"":qty}
            onChange={(e) => {
              setQty(e.target.value);
              localStorage.setItem(view, e.target.value);
            }}
            autoFocus={true}
          />
        </p>
      </div>
    </div>
  );
};

export default DayEdit;

import React, { useState } from "react";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";

const AddNewSite = () => {
  const sites = localStorage.getItem("sites");
  const [site, setSite] = useState("");
  return (
    <div className="flex flex-col bg-amber-50 min-w-screen min-h-screen justify-center">
      <h1 className="font-bold text-center">Add New Site</h1>
      <form
        action=""
        onSubmit={() => {
          if (sites === null) {
            localStorage.setItem("sites", site);
          } else {
            localStorage.setItem("sites", sites + "," + site);
          }
          toast.success("Site Added");
          window.location.reload();
        }}
        className="w-100 flex mx-auto mt-2 p-1 border justify-between"
      >
        <input
          type="text"
          value={site}
          onChange={(e) => {
            setSite(e.target.value);
          }}
          placeholder="Enter Site Name"
          className="p-1 m-1 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 rounded p-1 m-1 text-white font-bold"
        >
          Add Site
        </button>
      </form>
      <Link
        to={"/BillTheBrick/"}
        className="bg-red-500 mx-auto rounded text-center w-1/2 p-1 m-1 mt-2 text-white font-bold"
      >
        Return to Home
      </Link>
      <div className="w-100 mt-3 m-1 mx-auto">Sites Available: {sites}</div>
    </div>
  );
};

export default AddNewSite;

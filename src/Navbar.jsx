const Navbar = ({ year, site, month, setYear, setMonth, setSite }) => {
  const sites = (localStorage.getItem('sites') || "Add New Site").split(",");
  return (
    <>
      <h1 className="font-bold pt-3">KSR BillTheBrick</h1>
      <hr />
      <div className="justify-between flex w-100">
        <div className="flex justify-items-center bg-amber-100">
          {/* <span>Site:</span> */}
          <select
            name=""
            id=""
            value={site}
            onChange={(e) => {
              setSite(e.target.value);
              localStorage.setItem("site", e.target.value);
            }}
          >
            {
              sites.map((k)=>{
                return <option value={k} key={k}>{k}</option>
              })
            }
            {/* <option value="PRIMARK">PRIMARK</option>
            <option value="PATI">PATI</option>
            <option value="KOLLUR">KOLLUR</option> */}
          </select>
        </div>
        <div className="flex justify-items-center">
          <span>Year:</span>
          <select
            name=""
            id=""
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              localStorage.setItem("year", e.target.value);
              window.location.reload()
            }}
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
        </div>

        <div className="flex justify-items-center">
          <span>Month:</span>
          <select
            name=""
            id=""
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              localStorage.setItem("month", e.target.value);
              window.location.reload()
            }}
          >
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;

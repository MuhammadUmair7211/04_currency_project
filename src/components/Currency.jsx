function Currency() {
  return (
    <div className="container">
      <h1>Currency Converter Project</h1>
      <div className="from-container">
        <div className="from-input">
          <label htmlFor="">From</label>
          <input type="number" />
        </div>
        <div className="currency-type">
          <label htmlFor="">Currency Type</label>
          <select name="" id="">
            <option value="" hidden>
              USD
            </option>
          </select>
        </div>
      </div>
      <div className="to-container">
        <div className="to-input">
          <label htmlFor="">To</label>
          <input type="number" />
        </div>
        <div className="currency-type">
          <label htmlFor="">Currency Type</label>
          <select name="" id="">
            <option value="" hidden>
              PKR
            </option>
          </select>
        </div>
      </div>
      <button>Convert USD to PKR</button>
    </div>
  );
}

export default Currency;

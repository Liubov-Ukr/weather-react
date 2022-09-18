export default function Search() {
  return (
    <div className="col-sm-8">
      <form className="input-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
          />
          <button className="btn btn-primary">Search</button>
          <button type="button" className="btn btn-success">
            Currently
          </button>
        </div>
      </form>
    </div>
  );
}

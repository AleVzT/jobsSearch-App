
export const Filters = () => {
  return (
    <div className="container card mb-4 mt-4">
      <div className="row">
        <div className="col-6 my-3">
          <input className="form-control" placeholder="Type to search..." />
        </div>
        <div className="col-3 my-3">
          <select className="form-select" aria-label=".form-select-sm example">
            <option selected>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3 my-3">
          <select className="form-select" aria-label=".form-select-sm example">
            <option selected>Profile</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
    
  )
}

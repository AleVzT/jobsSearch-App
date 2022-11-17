import { useState } from "react";
import { useJobStore } from "../../hooks";

export const  CardRecruiter = ({dataProps}) => {

  const [checked, setChecked] = useState(dataProps.active);
  const { setActiveJob, startDeletingJob, startSavingJob } = useJobStore();

  const handleChange = () => {
    setChecked(!checked);
    startSavingJob({...dataProps, active: !checked});
  }

  const handleEdit = ( ) => {
    setActiveJob( dataProps );
  }

  const handleTrash = () => {
    startDeletingJob( dataProps );
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h4 className="card-title">{dataProps.name}</h4>
              <p className="card-text">{dataProps.company}</p>
            </div>
            <div className="col-md-4">
              <div className="form-check form-switch" style={{float: 'left'}}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={() => handleChange()} checked={checked}/>
              </div>
              <i className="fas fa-edit mx-2" onClick={() => handleEdit()}></i>
              <i className="fas fa-trash mx-2" onClick={() => handleTrash()}></i>
            </div>
          </div>
          <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-earth-americas mx-2"></i>{dataProps.location}</span>
          <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-house-laptop mx-2"></i>{dataProps.jobType}</span>
          <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-sack-dollar mx-2"></i>$ {dataProps.ratePerHour}</span>
          <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-user mx-2"></i>{dataProps.applicantUser?.length}</span>
        </div>
      </div>
    </>
  )
}

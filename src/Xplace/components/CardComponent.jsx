import { useState } from "react";
import { useAuthStore, useJobStore } from "../../hooks";

export const CardComponent = ({dataProps}) => {
  const [hideDetails, setHideDetails] = useState(false);
  const { user } = useAuthStore();
  const { startSavingJob } = useJobStore();

  const handleApplication = () => {
    let { applicantUser } = dataProps;

    applicantUser = Object.assign([], applicantUser);
    applicantUser.push(user.uid);

    startSavingJob( {...dataProps, applicantUser} );
  };

  return (
    <>
      { dataProps.active
      && <div className="container card mb-2">
        <div className="row">
          <div className="col-md-7 card-body" onClick={() => setHideDetails(!hideDetails)}>
            <h4 className="card-title">{dataProps.name}</h4>
            <p className="card-text">{dataProps.company}</p>
            <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-earth-americas mx-2"></i>{dataProps.location}</span>
            <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-house-laptop mx-2"></i>{dataProps.jobType}</span>
            <span className="badge rounded-pill bg-light text-dark"><i className="fas fa-sack-dollar mx-2"></i>$ {dataProps.ratePerHour}</span>
          </div>
          <div className="col-md-3 mt-5">
            {(dataProps.tools.length > 0) && dataProps.tools.map((tool) => {
              return (
                <>
                  <span className="badge bg-warning text-dark mx-2">{tool}</span>
                </>
              )
            }) }
          </div>
          <div className="col-md-2 mt-5">
            <button type="button" className="btn btn-outline-warning w-100" onClick={() => handleApplication()}>Apply</button>
          </div>
        </div>
        { hideDetails
        && <div className="container card-body mx-5">
            <div className="card-text">
              {dataProps.company} is hiring a
              <h3>{dataProps.name}</h3>
            </div>
            <p className="card-text">
              {dataProps.jobDesription}
            </p>
            <h5 className="mt-4">Salary and compensation</h5>
            <span>Rate per hour is $ {dataProps.ratePerHour}</span>
            <h5 className="mt-4">Location</h5>
            <span>{dataProps.location}</span>
          </div>
        }
      </div>
      }
    </>
  )
}

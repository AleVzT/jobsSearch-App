import { useEffect } from "react";
import { Navbar, FormJobsAdd, CardRecruiter } from "../";
import { useAuthStore, useJobStore } from "../../hooks";

export const RecruiterPage = () => {

  const { jobs, startLoadingJobs } = useJobStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startLoadingJobs(user.uid);
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container" style={{ width: '70%' }} >
        <h1>Xplace - Recruiter</h1>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
            { (jobs.length > 0) && jobs.map((element) => {
              return (
                <CardRecruiter key={element.id} dataProps={element} />
              );
            })} 
             
            </div>
            <div className="col-md-6">
              <FormJobsAdd />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

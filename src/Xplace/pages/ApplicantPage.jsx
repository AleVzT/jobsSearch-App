import { useEffect } from "react";
import { Navbar, CardComponent, Filters } from "../";
import { useJobStore } from "../../hooks";

export const ApplicantPage = () => {
  const { jobs, startLoadingJobs } = useJobStore();

  useEffect(() => {
    startLoadingJobs();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container" style={{ width: '70%' }} >
        <h1>Xplace - Applicant</h1>
        <Filters />
        { (jobs.length > 0) && jobs.map((element) => {
          return (
            <CardComponent key={element.id} dataProps={element} />
          );
        })}
      </div>
    </>
  )
}


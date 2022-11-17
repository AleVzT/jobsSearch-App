import { useEffect, useState } from 'react';
import { useJobStore } from '../../hooks';
import Swal from 'sweetalert2';

export const FormJobsAdd = () => {

  const { activeJob, setActiveJob, startSavingJob } = useJobStore()

  const [ formValues, setFormValues ] = useState({
    name: '',
    offerStartDate: '',
    offerEndDate: '',
    active: true,
    company: '',
    ratePerHour: '',
    tools: [],
    disciplines: [],
    jobDescription: '',
    jobType: '',
    location: ''
  });

  const onInputChanged = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    })
  }

  const handleClickClear = () => {
    setActiveJob({
      name: '',
      offerStartDate: '',
      offerEndDate: '',
      active: true,
      company: '',
      ratePerHour: '',
      tools: [],
      disciplines: [],
      jobDescription: '',
      jobType: '',
      location: ''
    });
  }

  useEffect(() => {
    if ( activeJob !== null ) {
      setFormValues({ ...activeJob });
    }
  }, [ activeJob ])
  

  const JobSubmit = async( event ) => {
    event.preventDefault(); 
    
    if ( formValues.offerEndDate < formValues.offerStartDate ) {
        Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error');
        return;
    }
    
    if ( formValues.name.length <= 0 ) return;
    
    await startSavingJob( formValues );
  }

  return (
    <>
      <div className="login-form-2" style={{backgroundColor: 'white'}}>
        <h3 style={{color: 'black'}}>Registro</h3>
        <form onSubmit={ JobSubmit }>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Puesto"
              name="name"
              value={ formValues.name }
              onChange={ onInputChanged }
            />
          </div>  
          <div className="form-group mb-2">
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3" 
              placeholder="Jobs Description"
              name="jobDescription"
              value={ formValues.jobDescription }
              onChange={ onInputChanged }
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Company" 
              name="company"
              value={ formValues.company }
              onChange={ onInputChanged }
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="number"
              className="form-control"
              min="0" 
              placeholder="Rate Per Hour" 
              name="ratePerHour"
              value={ formValues.ratePerHour }
              onChange={ onInputChanged }
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              name="location"
              value={ formValues.location }
              onChange={ onInputChanged }
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Job Type" 
              name="jobType"
              value={ formValues.jobType }
              onChange={ onInputChanged }
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Tools" 
            />
          </div>

          <div className="form-group mb-2">
          <input
              type="text"
              className="form-control"
              placeholder="Disciplines" 
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="date"
              className="form-control"
              placeholder="OfferStartDate"
              name="offerStartDate"
              value={ formValues.offerStartDate }
              onChange={ onInputChanged }
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="date"
              className="form-control"
              placeholder="OfferEndDate"
              name="offerEndDate"
              value={ formValues.offerEndDate }
              onChange={ onInputChanged }
            />
          </div>

          <div className="d-grip gap-2" style={{ textAlign: 'center' }} >
            <input 
              type="buttom" 
              className="btn btn-outline-dark"
              onClick={ handleClickClear }
              value="Limpiar" />
             <input 
              type="submit" 
              className="btn btn-outline-dark mx-4"
              value={activeJob?.id ? 'Update':'Crear'} />
          </div>
        </form>
      </div>
    </>
  )
}

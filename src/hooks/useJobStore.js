import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { jobsApi } from '../api';
import { onAddNewJob, onDeleteJob, onLoadJobs, onSetActiveJob, onUpdateJob } from '../store';


export const useJobStore = () => {

    const dispatch = useDispatch()
    const { jobs, activeJob } = useSelector( state => state.job );
    const { user } = useSelector( state => state.auth );

    const setActiveJob = ( jobSelect ) => {
        dispatch( onSetActiveJob( jobSelect ) );
    }

    const startSavingJob = async( job ) => {
        if ( job.id ) {
            await jobsApi.put(`/jobs/${ job.id }`, job );
            dispatch( onUpdateJob({ ...job, user }) );
            return;
        }
        const { data } = await jobsApi.post('/jobs', job );
        dispatch( onAddNewJob({ ...job, id: data.job.id, user }) );
    }

    const startDeletingJob = async( job ) => {
        try {
            await jobsApi.delete(`/jobs/${ job.id }` );
            dispatch( onDeleteJob() );
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const startLoadingJobs = async(id) => {
        try {
            if (id) {
                const { data } = await jobsApi.get(`/jobs/user/${id}`);
                dispatch( onLoadJobs( data.jobs ) );
            } else {
                const { data } = await jobsApi.get('/jobs');
                dispatch( onLoadJobs( data.jobs ) );
            }
        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
    }

    return {
        //* Propiedades
        activeJob,
        jobs,

        //* Métodos
        setActiveJob,
        startDeletingJob,
        startLoadingJobs,
        startSavingJob,
    } 
}

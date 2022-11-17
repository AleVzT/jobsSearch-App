import { createSlice } from '@reduxjs/toolkit';

const tempJob =  {
    name: "Game designer",
    offerStartDate: "2022-12-01T12:00:00.000Z",
    offerEndDate: "2023-02-01T12:00:00.000Z",
    active: true,
    company: "Acme Company",
    ratePerHour: 20,
    tools: [
        "Unity",
        "3DMax"
    ],
    disciplines: [
        "Game Design"
    ],
    jobType: "Remote",
    location: "Argentina, Buenos Aires",
    createUser: "6374245a35262626a2ca22f1",
    applicantUser: [],
    id: "637459be7e542ca531239345"
};


export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        isLoadingJobs: true,
        jobs: [

        ],
        activeJob: null
    },
    reducers: {
        onSetActiveJob: ( state, { payload }) => {
            state.activeJob = payload;
        },
        onAddNewJob: ( state, { payload }) => {
            state.jobs.push( payload );
            state.activeJob = null;
        },
        onUpdateJob: ( state, { payload } ) => {
            state.jobs = state.jobs.map( job => {
                if ( job.id === payload.id ) {
                    return payload;
                }
                return job;
            });
        },
        onDeleteJob: ( state, { payload } ) => {
            state.jobs = state.jobs.filter( job => {
                if ( job.id === payload.id ) {
                    return payload;
                }
                return job;
            });
        },
        onLoadJobs: (state, { payload = [] }) => {
            state.isLoadingJobs = false;
            // state.jobs = payload;
            payload.forEach( job => {
                const exists = state.jobs.some( dbJob => dbJob.id === job.id );
                if ( !exists ) {
                    state.jobs.push( job )
                }
            })
        },
        onLogoutJob: ( state ) => {
            state.isLoadingJobs = true,
            state.jobs      = []
            state.activeJob = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewJob,
    onDeleteJob,
    onLoadJobs,
    onLogoutJob,
    onSetActiveJob,
    onUpdateJob,
} = jobsSlice.actions;
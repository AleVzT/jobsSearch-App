
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { useAuthStore } from '../hooks';
import { RecruiterPage, ApplicantPage } from '../Xplace';

export const AppRouter = () => {

  const { status, checkAuthToken, user } = useAuthStore();

  useEffect(() => {
      checkAuthToken();
  }, [])

  if ( status === 'checking' ) {
    return (
        <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        ( status === 'not-authenticated')  
          ? (
              <>
                  <Route path="/auth/*" element={ <LoginPage /> } />
                  <Route path="/*" element={ <Navigate to="/auth/login" /> } />
              </>
          )
          : (
              <>
                  { 
                    (user.userType === 1)
                      ? ( <Route path="/" element={ <RecruiterPage /> } /> )
                      : ( <Route path="/" element={ <ApplicantPage /> } /> )
                  }
                  <Route path="/*" element={ <Navigate to="/" /> } />
              </>
          )
      }
    </Routes>
  )
}

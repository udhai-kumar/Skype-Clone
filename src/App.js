import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Button from '@mui/material/Button';





import JoinForm from './components/joinForm/JoinForm';
import MeetingRoom from './components/meeting/MeetingRoom';


// 100ms SDK
import {
  useHMSActions,
  selectIsConnectedToRoom,
  useHMSStore
} from '@100mslive/react-sdk';
// react router
import { Route, Routes, Link, useLocation } from 'react-router-dom';



function App() {

  // for conditional rendering
  let location = useLocation();

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  // incase the user refreshes or closes the tab
  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected])

 

  return (
    <div className='content'>
      <div className='container-fluid'>

        <div>
          <div>
            {isConnected ? (<MeetingRoom />) : (
              <Routes>
                <Route path='/joinform' element={<JoinForm />} />
              </Routes>)}
          </div>
        </div>


        {location.pathname === '/' && (
          <>
            <div className='d-flex flex-column justify-content-center align-items-center contan'>

            <div className=''>
             
              <b className='py-2'>
                <h1>Premium Video Meetings.
                  Now free for everyone.</h1> <br />
                We re-engineered the service we built
                for secure business meetings , Zoom Meet,to make it free and available for all.
              </b>
            </div>
              
              <div>
                <Link to='/joinform' style={{ textDecoration: 'none' }}>
                  <Button
                    type='submit'
                    variant='contained'
                    sx={styles.joinFormButton}>
                    Create A Free Video Call
                  </Button>
                </Link>
              </div>
              <div className='contain '>

              </div>
            </div>
          </>

        )}

      </div>
      
    </div>


  )
}


const styles = {
  connected: {
    backgroundColor: '#00aff0',
    width: '50%',
    textAlign: 'center',
    fontSize: '20px',
    padding: '0.5rem',
    margin: 'auto',
    borderRadius: '2px'
  },
  card: {
    width: '50%',
    margin: 'auto'
  },
  joinFormButton: {
    marginTop: '2rem',
    backgroundColor: '#00aff0',
    borderRadius: '90px',
    padding: '15px',
  }
}

export default App;
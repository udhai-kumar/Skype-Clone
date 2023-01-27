import React, { useState } from 'react';
import { useHMSActions } from '@100mslive/react-sdk';
import getToken from '../../endpoints/getToken';
import '@fontsource/roboto/300.css';
 import './joinform.css';




const JoinForm = () => {
    const hmsActions = useHMSActions();


    const [username, setUsername] = useState({ name: '' });
    const [role, setRole] = useState('');


    const handleUsernameChange = (e) => {
        setUsername((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    const JoinRoom = () => {
        getToken(username.name, role)
            .then((token) => {
                hmsActions.join({
                    userName: username.name,
                    authToken: token,
                    settings: {
                        isAudioMuted: true,
                        isVideoMuted: false,
                    },
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // submit function
    function handleSubmit(e) {
        e.preventDefault();
        JoinRoom();
    }


    return (
        <>  
        <div className='login'>
        <div className="login-box">
        
        
        <form >

                 <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        value={username.name}
                        onChange={handleUsernameChange}
                    />
                <select 
                        value={role}
                        onChange={handleRole}
                        className="users"
                         name="role">
                <option>Select role</option>
                <option value="host">Host</option>
                <option value="guest">Guest</option>
            </select><br/><br/>
            <button
                    className='btn btn-info btn-cont'
                    onClick={handleSubmit}
                    type='submit'>
                    Join
                </button>

        </form>

    </div>
    </div>
        </>
    )
}





export default JoinForm
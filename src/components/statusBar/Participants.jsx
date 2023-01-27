import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';

const Participants = ({handleClickOpen}) => {
  return (
     
    <button onClick={handleClickOpen}
     style={styles.button}>
        <BsFillPeopleFill />
    </button>    
    ) 
  }


  const styles ={
    button: {
      borderRadius: '50%',
      fontSize: '22px',
      border: 'none',
      cursor: 'pointer',
      color:'blue'
    }
  }

export default Participants;
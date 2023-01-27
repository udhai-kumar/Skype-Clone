import React from 'react';

import {BsChatRightText}  from 'react-icons/bs'



const ShowChat = ({handleChat}) => {

  return (
    <>
        <button onClick={handleChat}
         style={styles.button}>
            <BsChatRightText />
        </button>
    </>
  )
}
const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    border: 'none',
    cursor: 'pointer',
    color:'blue',
    marginLeft:'10px'
  }
}
 export default ShowChat
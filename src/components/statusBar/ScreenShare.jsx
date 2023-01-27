import React from 'react';
import { useHMSStore, selectIsLocalScreenShared } from '@100mslive/react-sdk';
import { TbScreenShare,TbScreenShareOff } from 'react-icons/tb'


const ScreenShare = ({handleScreen}) => {
    
    const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  return (
    <button
      onClick={handleScreen}
      style={styles.button}
    >
        {!(isLocalScreenShared) ? <TbScreenShareOff/> : <TbScreenShare />} 
    </button>
  )
}

const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    color : 'blue',
    marginLeft : "10px"
  }
}

export default ScreenShare;
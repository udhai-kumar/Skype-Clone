import React,{useState,useEffect} from 'react'

import {
  selectLocalPeerID,
  selectLocalPeerRoleName,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import {  MdOutlineFrontHand, MdFrontHand } from 'react-icons/md';

const HandRaised = () => {
  const [role,setRole] = useState()
    
    const peer = useHMSStore(selectLocalPeerID);
    const  localrole = useHMSStore(selectLocalPeerRoleName);
    const hmsActions = useHMSActions();
    //console.log(localrole)

    const isHandRaised = peer;
    useEffect(()=>{

      localrole === 'guest'? setRole('handraise'):setRole('guest')
    },[localrole])
   
    
    const toggleHandRaised = () => {
        hmsActions.changeRoleOfPeer(
            peer,
            role, true
        )
    } 

  return (
      <>     
    <button onClick={toggleHandRaised}
     style={styles.button}>
        { !isHandRaised ? (<MdOutlineFrontHand />) : (<MdFrontHand />) }
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
    marginLeft:'10px',
    color :"blue"

  
  }
}

export default HandRaised
import React ,{useEffect,useRef}  from 'react';
import { 
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID,
} from '@100mslive/react-sdk'
import HandRaiseBadge from './HandRaiseBadge';



const Peer = ({peer}) => {


  const videoRef = useRef(null)
  const hmsActions = useHMSActions();

  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id))
  useEffect(() =>{
      if(videoRef.current && videoTrack){
          if(videoTrack.enabled){
              hmsActions.attachVideo(videoTrack.id, videoRef.current)
          }
          else{
              hmsActions.detachVideo(videoTrack.id, videoRef.current)
          }
      }
  }, [videoTrack, hmsActions])



return (
     
    <div>

      <video
        ref={videoRef} 
        style={styles.video}
        autoPlay
        muted
        playsInline
        
      />
      <div  className='text-center  '>
        <b className="d-flex justify-content-center align-items-center">{peer.name} {!peer.isLocal && `(${peer.roleName})`}
        {peer.roleName === 'handraise' && <HandRaiseBadge className="button" />} 
</b> 

      </div>
      
    </div>
    
  );
}
const styles ={
  video:{
    borderRadius: '20px',
    width: '200px' , 
    height : "200px",
    backgroundColor:'lightgray',
    marginLeft:'10px'
   
  }
}

export default Peer
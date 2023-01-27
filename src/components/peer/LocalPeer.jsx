import React, { useEffect, useRef, useState } from 'react';
import { AiFillAudio , AiOutlineAudioMuted } from "react-icons/ai";
import { BsCameraVideoFill,BsCameraVideoOffFill } from "react-icons/bs";
import { FcEndCall } from "react-icons/fc";
import {
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsConnectedToRoom

} from '@100mslive/react-sdk'
import HandRaiseBadge from './HandRaiseBadge';





const LocalPeer = ({ localpeer }) => {

  // for local peer (You)
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const videoRef = useRef(null)
  const hmsActions = useHMSActions();
  console.log(videoRef)

  const videoTrack = useHMSStore(selectCameraStreamByPeerID(localpeer.id))
  useEffect(() => {
    if (videoRef.current && videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoRef.current)
      }
      else {
        hmsActions.detachVideo(videoTrack.id, videoRef.current)
      }
    }
  }, [videoTrack, hmsActions])
  
  const [mediaStatus, setMediaStatus] = useState(true);
  const [videoStatus, setVideoStatus] = useState(true)
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)

  const toggleAudio = async () => {
    setMediaStatus(!mediaStatus)
    await hmsActions.setLocalAudioEnabled(!audioEnabled)
  }
  const toggleVideo = async () => {
    setVideoStatus(!videoStatus)
    await hmsActions.setLocalVideoEnabled(!videoEnabled)

  }

  const handleLeaveRoom = () => {
    if (isConnected) hmsActions.leave()
  }





  let width = '75%'

  return (
    <div>

      <div className="peer">

      <video
        ref={videoRef}
        className={` ${localpeer.isLocal ? "local" : ""}`}
        style={styles.video}
        autoPlay
        muted
        playsInline
        width={width}

      />
            </div>

    
        <div className="func-btn d-flex justify-content-center align-items-center">
        <h2><b>{localpeer.name} {localpeer.isLocal && "(You)"}</b></h2>

          <button onClick={toggleVideo} className='button'>
            {videoStatus ?  <BsCameraVideoFill/> : <BsCameraVideoOffFill/>} 
          </button>
          <button onClick={toggleAudio} className='button' >
            {mediaStatus ? <AiOutlineAudioMuted/> : <AiFillAudio/> }

          </button>
          <button onClick={handleLeaveRoom} className='button'>

          <FcEndCall/>
          </button>
          {localpeer.roleName ==='handraise' && <HandRaiseBadge />} 


        </div>



      </div>

    
  );
}

const styles = {
  video: {
    borderRadius: '20px',
    width: '100%',
    backgroundColor:'lightgray',
   
  }
}


export default LocalPeer




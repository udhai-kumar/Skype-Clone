import React,{useEffect} from 'react';
import {
    useHMSActions,useHMSStore,selectScreenShareByPeerID
    
  } from '@100mslive/react-sdk';

  

const Screen = React.memo(({peer }) => {



    const hmsActions = useHMSActions();
    const screenRef = React.useRef(null);
    console.log(screenRef)
    const screenTrack = useHMSStore(selectScreenShareByPeerID(peer.id));
    console.log(peer.id)

    useEffect(() => {
        
         /*  console.log(screenRef.current);
          console.log(screenTrack);
          */ if (screenRef.current && screenTrack) {
            if (screenTrack.enabled) {
               hmsActions.attachVideo(screenTrack.id, screenRef.current);
            } else {
               hmsActions.detachVideo(screenTrack.id, screenRef.current);
            }
          }
        }
        
      , [screenTrack,hmsActions]);

  return (
     <div>
        <div className="share">
        
          <video
            ref={screenRef}
            autoPlay={true}
            playsInline
            muted={false}
           
          >
          </video>
          </div>
        </div>
      
  )
});

export default Screen;
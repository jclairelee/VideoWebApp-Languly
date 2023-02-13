// import React, { useState, useEffect, useRef } from "react";

// function VideoBox({ width, borderRadius, height, margin }) {
//   const [stream, setStream] = useState();
//   const myVideo = useRef();

//   useEffect(() => {
//     const getUserMedia = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         myVideo.current.srcObject = stream;

//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUserMedia();
//   }, []);

//   return (
//     <div className="video">
//       {/* <div className="video__wrapper"> */}
//       <video
//         playsInline
//         ref={myVideo}
//         autoPlay
//         style={{
//           margin: margin,
//           width: width,
//           borderRadius: borderRadius,
//           height: height,
//         }}
//       />
//       {/* </div> */}
//       {/* <div className="video">
//         {callAccepted && !callEnded ? (
//           <video
//             playsInline
//             ref={userVideo}
//             autoPlay
//             style={{ width: "300px" }}
//           />
//         ) : null} */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default VideoBox;

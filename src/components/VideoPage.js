import React from "react";
import { useState } from "react";
import Modal from "./ModalComp"

const videos = [ 
    {
        id: 1,
        title: "More Than Meets the Eye with Chief Bosco ",
        src: "/videos/Bosco-1.mp4",
    },
    
    {
        id: 2,
        title: "More Than Meets the Eye with Chief Matrunics",
        src: "/videos/Matrunics-1.mp4",

    },
    
    {
        id:3,
        title: "More Than Meets the Eye with Latrobe PD",
        src: "/videos/1735.mp4"

    },

    {
        id:4,
        title: "More Than Meets the Eye Ligoneer Radio",
        src: "/videos/1759.mp4",
    },

];

function VideoPage() {
    const [activeVideo, setActiveVideo ] = useState(null);

    return (
        <div className="Video-page">
            <h1>Video Library</h1>
        
            <div className="video-grid">   
                {videos.map((video) => (
                    <div key={video.id} className="video">
                        <video width="100%" 
                                preload="metadata"
                                style={{cursor: 'pointer', borderRadius: '8px'}}
                               onClick={() => setActiveVideo(video.src)}
                        >
                            <source src = {video.src} type="video/mp4" />
                            Your browser does not suppport the video tag.
                        </video>
                        <h4>{video.title}</h4>
                    </div>     
                ))}
            </div>

        {/* Modal */}
            {activeVideo && ( 
                <Modal onClose={() => setActiveVideo(null)}>
                    <video
                    className="modal-video"
                    src={activeVideo}
                    controls
                    autoPlay
                    style={{ width: '100%', maxHeight: '80vh'}}
                    />


                </Modal>

            )}

         </div>     

      
    );
}

export default VideoPage;

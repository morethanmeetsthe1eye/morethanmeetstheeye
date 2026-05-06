import React from "react";
import { useState } from "react";
import Modal from "./ModalComp"

const videos = [ 
    {
        id: "yFABX8FzRA8",
        title: "More Than Meets the Eye with Chief Bosco ",
         
    },
    
    {
        id: "rR91P_4rhMQ",
        title: "More Than Meets the Eye with Chief Matrunics",
    

    },
    
    {
        id: "LYlzQoBhFkk",
        title: "Ligonier PD Patrol",
        

    },

    {
        id: "qCTIR-GaDFE",
        title: "More Than Meets the Eye Ligoneer Radio",
    
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
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                            alt={video.title}  
                            style={{width: '100%', borderRadius: '10px', cursor: 'pointer'}}  
                            onClick={() => setActiveVideo(video.id)}   
                            />             
                             <h4>{video.title}</h4>
                               
                    </div>     
                ))}
            </div>

        {/* Modal */}
            {activeVideo && ( 
                <Modal onClose={() => setActiveVideo(null)}>
                    <div className="video-wrapper">
                        <iframe
                        src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                        title = "Video Player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        />
                    </div>

                </Modal>

            )}

         </div>     

      
    );
}

export default VideoPage;

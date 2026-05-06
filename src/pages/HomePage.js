import { Container } from 'reactstrap'; 


const HomePage = () => {
    return (
        <Container>
            <div className="container mt-5 text-center">
              <h2>More Than Meets The Eye</h2>

                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/yFABX8FzRA8?si=VvNku109GPl0_CdX" 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>    

                 </div>
                
            </div>
    
       </Container>
    );  
       
};

export default HomePage;
import { Container } from 'reactstrap'; 


const HomePage = () => {
    return (
        <Container>
            <div className="container mt-5 text-center">
            <h2>More Than Meets The Eye</h2>

            <video 
    
                width="100%" 
                controls
                style={{ maxHeight: "550px", borderRadius: "8px" }}
            >
                <source src='/videos/Bosco-1.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    
       </Container>
    );  
       
};

export default HomePage;
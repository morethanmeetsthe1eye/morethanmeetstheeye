import { Container, Col, Row, } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (

            <Container>
            

                <Row className='row-content align-items-center'>
                    <Col sm='4'>
                        <h3> Group Information </h3>
                        <br/>
                        
                         <h6>More Than Meets The Eye</h6>   

                         <address>
                            5129 Route 30
                            <br />
                            Greensburg, PA 15601
                            <br />
                            U.S.A.
                        </address>

                    </Col>
                    
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+14125222563'
                        >
                            <i className='fa fa-phone' /> 412-522-2563
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                             href='mailto:jstewart@achieva.info'
                        >
                            <i className='fa fa-envelope-o' /> Email Group
                        </a>

                    </Col>
                </Row>

                <Row className='row-content'>
                    
                    <Col xs='12'>
                    
                    <h2> Please Send Us Your Feedback </h2>
                    <hr/>

                    </Col>
                    
                    <Col md='10'>
                        <ContactForm />                 
                    </Col>
                </Row>
            </Container>
    );

};

export default ContactPage;
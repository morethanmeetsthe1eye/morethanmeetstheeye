import { Col, Row, Container, Card, CardImg, CardBody, CardHeader } from 'reactstrap';
import group from '../App/Assets/images/group1.jpg';
import PartnersList from '../components/PartnersList';

const AboutPage = () => {

    return ( 

        <Container>
           
            <Row className='row-content'>
                
                <Col sm='6'>

                    <h3>
                        About The Group !
                    </h3>

                    <CardImg src={group} />

                    <p>
                        More Than Meets the Eye is a concept that attempts to address how police and public safety interact with those who may be on the autism spectrum and / or intellectually challenged. 
                    </p>
                    <p>
                        This is really a look at these situations from the inside out. This is not an uninformed view but rather researched and produced by those who are differently abled.
                    </p>
                    <p>
                        Trevor Kerr is a video producer who has championed this cause. As a young man, he was stopped by police for speeding. While the officer was verfy professional, Trevor felt the situationwould present a great deal of anxiety (perhaps that is an intended outcome?). Trevor had taken some TV production classes in high school and worked with the Latrobe Arts Council producing video pieces about different exhibits. He thought, "why don't I attempt to answer some of these questions about police and ID/A, via video." This site is to show the result of his efforts.
                    </p>

                </Col>
                
                <Col sm='6'>

                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>
                                Contact Information
                            </h3>
                            
                        </CardHeader>

                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Jim Stewert</dt>
                                <dd className='col-6'>Liason</dd>
                                <dt className='col-6'> Phone: </dt>
                                <dd className='col-6'>1-412-522-2563</dd>
                                <dt className='col-6'>Email:</dt>
                                <dd className='col-6'>morethanmeets.the1eye@gmail.com</dd>
                                
                
                            </dl>
                        </CardBody>


                    </Card>

                </Col>

            
            </Row>


            <Row className='row-content'>
                <Col xs='12'>
                
                  <row> <PartnersList/> </row>                   
        
                </Col>
            </Row>

        </Container>

    );

}

export default AboutPage;
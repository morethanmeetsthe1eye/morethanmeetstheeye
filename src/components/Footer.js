import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import bSLogo from '../App/Assets/images/bluesky-logo.png'

const Footer = () => {
        return (
            <footer className='site-footer'>
                <Container>
                    <Row>
                        <Col xs={{ size: 4, offset: 1 }} sm='2'>
                            <h5>Links</h5>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                     <Link to='/about'>About</Link>
                                </li>
                                <li>
                                  
                                    <Link to='/moreInfo'>The Series</Link>
                               </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </Col>
                        <br />
                        <Col xs='6' sm='3' className='text-center'>
                            <h5>Social</h5>
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='https://www.facebook.com/people/More-Than-Meets-The-Eye/61590192850622'           >
                                
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon'
                                href='https://bsky.app/profile/morthanmeetstheeye.bsky.social'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img 
                                    src={bSLogo}
                                    alt='Bluesky'
                                    style={{width: '32px', height: '32px'}}
                                />      
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-google'
                                href='http://www.youtube.com/@MoreThanMeetsThe-Eye'
                            >
                                <i className='fa fa-youtube' />
                            </a>
                        </Col>
                        <br />
                        <Col sm='4' className='text-center'>
                            <a
                                role='button'
                                className='btn btn-link'
                                href='tel:+14125222563'
                            >
                                <i className='fa fa-phone' /> 1-412-522-2563
                            </a>
                            <br />
                            <a
                                role='button'
                                className='btn btn-link'
                                href='mailto:morethanmeets.the1eye@gmail.com'
                            >
                                <i className='fa fa-envelope-o' /> morethanmeets.the1eye@gmail.com
                            </a>
                        </Col>
                        <br />
                    </Row>
                </Container>
            </footer>
        );
    };
    
    export default Footer;
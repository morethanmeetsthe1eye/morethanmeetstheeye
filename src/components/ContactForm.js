import { Button, Label, Col, FormGroup } from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    

    const validateSchema = Yup.object({
        firstName: Yup.string()
        .required('Required')
        .min(2,'Must be at least 2 characters'),
        
        lastName: Yup.string()
            .required('Required'),
        
        phoneNum: Yup.string()
        .matches(/^\d+$/,'Must be a number')
        .min(10, 'Too Short')
        .required('Required'),
        
        email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
        
        feedback: Yup.string()
        .required('Please enter feedback')

    })

    const handleSubmit = (values, {resetForm}) => {
        alert('Form submitted successfully!');
        console.log('form values:', values);
        console.log('in JSON format ' , JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik 
        initialValues={{
            firstName: '',
            lastName:'',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''

        }}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
    
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'> {msg} </p> }
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field  
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                         <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'> {msg} </p> }
                        </ErrorMessage>
                    </Col>

                </FormGroup>
                
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field
                            name='phoneNum'
                            placeholder='5551234567' 
                             className='form-control'
                        />
                         <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'> {msg} </p> }
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                    
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field  
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                         <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'> {msg} </p> }
                        </ErrorMessage>
                    </Col>    
                </FormGroup>
                
                <FormGroup row>
                    <Label check md={{size: 4, offset: 2}}>
                        <Field 
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                            /> {' '}

                        May I Contact You?
                    </Label>
                    <Col md='4'>
                        <Field
                            name='contactType'
                            as='select'  
                            className='form-control'
                            >
                                <option>By Phone</option>
                                <option>By Email </option>
                        </Field>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                        <Field 
                         name='feedback'
                         as='textarea'
                         rows='12'
                         className='form-control'/>
                    </Col>
                </FormGroup>
                    
                <FormGroup row>
                    <Col md={{ size:10, offset: 2}}>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>    
                    </Col>
                </FormGroup>
            </Form>
        </Formik>

    )
};

export default ContactForm;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Doctor.css'

const Doctors = () => {
    return (
        <div className='doctor-section' id='doctors'>
            <Container>
                <h1>Doctors</h1>
                <Row xs={1} md={2} lg={3} className='g-2 mt-3'>
                    <Col>
                        <img height='250px' src="https://i.ibb.co/vcvB2Wn/Sharmin.png" alt="" />
                        <h5>DR. SHARMIN TAHMINA KHAN</h5>
                        <p>GASTRO- ENTEROLOGY</p>
                    </Col>
                    <Col>
                        <img height='250px' src="https://i.ibb.co/ZVXRgGC/Saha.png" alt="" />
                        <h5>PROF. DR. NARAYAN SAHA</h5>
                        <p>NEUROLOGY</p>
                    </Col>
                    <Col>
                        <img height='250px' src="https://i.ibb.co/sVRBhNd/Lutfur.png" alt="" />
                        <h5>PROF. DR. H. I. LUTFUR RAHMAN KHAN</h5>
                        <p>CARDIOLOGY</p>
                    </Col>
                    <Col>
                        <img height='250px' src="https://i.ibb.co/3TF6CXw/Farid.png" alt="" />
                        <h5>DR. A.M. FARID UDDIN AHMED</h5>
                        <p>ORTHOPAEDICS</p>
                    </Col>
                    <Col>
                        <img height='250px' src="https://i.ibb.co/gvmmRSv/Dev-Nath.png" alt="" />
                        <h5>DR. DEBDULAL DEB NATH</h5>
                        <p>ORTHOPAEDICS</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;
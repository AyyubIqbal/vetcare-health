import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SpecialistHome = () => {
    return (
        <div className='my-5' id='team'>
            <Container>
                <Row>
                    <Col xs={12} md={6} >
                        <h3 className='mt-2'>Dr. Stephanie Wosniack</h3>
                        <h1 className='fs-1 my-4'>OUR <span className='fw-bold text-success'>SPECIALIST</span></h1>
                        <br />
                        <p className='lh-lg'>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. Her loves in life include her husband, Craig, two cattle dogs, Suture and Kanga, a Malinois, Kiva, and her two horses, Widget and Doc.</p>
                        <img src="https://i.ibb.co/P4JX7bt/sign-1.png" alt="" />
                    </Col>
                    <Col xs={12} md={6} >
                        <img width='80%' src="https://i.ibb.co/cbDHrqW/doktorka.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpecialistHome;
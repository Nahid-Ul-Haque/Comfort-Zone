import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, description, key } = props.service || {}
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img height='250px' variant="top" src={img} />
                    <Card.Body className='service-card'>
                        <Card.Title className='text-white'>{name}</Card.Title>
                        <Card.Text className='text-white'>
                            {description.slice(0, 50)}
                        </Card.Text>
                        <Link to={`/details/${key}`}>
                            <button className='service-btn'>Click Here</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
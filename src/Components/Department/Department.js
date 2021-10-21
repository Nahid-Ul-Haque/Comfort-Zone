import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Department.css'

const Department = (props) => {
    const { name, img, description } = props.department || {}
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img height='250px' variant="top" src={img} />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 50)}
                        </Card.Text>
                        <button className='department-btn'>Click Here</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Department;
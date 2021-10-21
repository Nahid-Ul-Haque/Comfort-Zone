import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import './Departments.css'
const Departments = () => {
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div id='departments'>
            <Container>
                <h1 className='department-section'>Departments</h1>
                <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                    {
                        departments?.map(department => <Department
                            key={department.key}
                            department={department}
                        ></Department>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Departments;
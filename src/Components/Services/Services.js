import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Service.css'

const Services = () => {
    const { services } = useService()
    console.log(services)
    return (
        <div id='services'>
            <Container>
                <h1 className='service-section'>Services</h1>
                <Row xs={1} md={2} lg={3} className='g-4 mt-3'>
                    {
                        services?.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;
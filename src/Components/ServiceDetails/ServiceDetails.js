import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useService';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';

const ServiceDetails = () => {
    const { detailsId } = useParams();
    const { services } = useService();
    const [singleService, setSingleService] = useState([]);


    useEffect(() => {
        if (services.length > 0) {
            const Details = services?.find((service) => service.key === Number(detailsId));
            setSingleService(Details);

        }
    }, [services, detailsId]);

    return (
        <div>
            <Header></Header>
            <h1>ID:{singleService.key}</h1>
            <img height='300px' src={singleService.img} alt="" />
            <h2 className='text-danger'>{singleService.name}</h2>
            <h5>{singleService.description}</h5>
            <br />
            <br />
            <Link style={{ textDecoration: 'none', color: 'red', fontSize: '30px' }} to='/home'>Back</Link>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
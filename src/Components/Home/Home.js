import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div id='home'>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Departments></Departments>
            <Footer></Footer>
        </div>
    );
};

export default Home;
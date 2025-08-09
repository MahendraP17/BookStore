import React from 'react';
import Navbar from '../components/Navbar';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function Home() {
    return (
        <>
        <div className='w-full overflow-x-hidden'>

            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </div>
        </>
    )
}

export default Home

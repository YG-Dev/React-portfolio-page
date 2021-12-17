import MenuNavbar from '../Apps/MenuNavbar';
import MainBanner from '../Apps/MainBanner';
import MainServices from '../Apps/MainServices';
import MainPortfolio from '../Apps/MainPortfolio';
import MainContact from '../Apps/MainContact';
import Footer from '../Components/Footer';

function HomePage () {
    return (
        <>
            <MenuNavbar id="navbar"/>
            <MainBanner id="about-us"/>
            <MainServices id="our-services"/>
            <MainPortfolio id="portfolio"/>
            <MainContact id="contact"/>
            <Footer id="footer"/>
        </>
    )
}

export default HomePage;
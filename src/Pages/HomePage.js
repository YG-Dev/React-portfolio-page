import MenuNavbar from '../Components/MenuNavbar';
import MainBanner from '../Components/MainBanner';
import MainServices from '../Components/MainServices';

function HomePage () {
    return (
        <>
            <MenuNavbar id="main-navbar"/>
            <MainBanner id="about-us"/>
            <MainServices id="our-services"/>
        </>
    )
}

export default HomePage;
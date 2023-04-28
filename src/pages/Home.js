import Appbar from "../components/Appbar";
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import Content from '../components/Content';
import CoursesList from "../components/CoursesList";

function Home() {
    return (
        <>
            <Appbar />
            <Banner />
            <CoursesList/>
            <Content />
            <Footer />
        </>

    )
}


export default Home
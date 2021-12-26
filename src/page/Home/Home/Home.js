
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BasicProjects from '../BasicProjects/BasicProjects';
import Projects from '../Projects/Projects';
import Travel from '../Travel/Travel';


const Home = () => {
   
    return (
        <div id='overflow-hidden'>
            <Navigation></Navigation>
            <Banner></Banner>
            <Projects></Projects>
            <BasicProjects></BasicProjects>
            <Travel></Travel>
        </div>
    );
};

export default Home;
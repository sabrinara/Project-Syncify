import Sponsors from "./Sponsors";
import Banner from "./banner";
import TopCompanySlider from "../Pages/Home/TopCampanySliderSection/TopCompanySlider";
import DifferentTypeOfTabSection from "../Pages/Home/DifferentTypeOfTabSection/DifferentTypeOfTabSection";


const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsors />
      <DifferentTypeOfTabSection/>
      <TopCompanySlider/>
    </div>
  );
    
};

export default Home;

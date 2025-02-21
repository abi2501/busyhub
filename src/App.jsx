import "./App.css";
import {
  learnerSliderData,
  mentorSliderData,
  tutorSliderData,
} from "./constants/constant";
import Navbar from "./features/Navbar";
import TechSliderBox from "./features/TechSliderBox";
import Banner from "./sections/Banner";
import CompaniesSlider from "./sections/CompaniesSlider";
import CourseContent from "./sections/CourseContent";
import FrequentQuestions from "./sections/FrequentQuestions";
import HiringSlider from "./sections/HiringSlider";

import Promotions from "./sections/Promotions";
import Scope from "./sections/Scope";
import SildersContent from "./sections/SildersContent";
import TopSkills from "./sections/TopSkills";

function App() {
  return (
    <>
      <div className="font-heebo w-full h-full max-w-screen-xl mx-auto overflow-y-auto">
        <Navbar />
        <Banner />
        <Promotions />
        <Scope />
        <TopSkills />
        <TechSliderBox />
        <CourseContent />
        <HiringSlider />
        <SildersContent silderData={learnerSliderData} />
        <SildersContent silderData={tutorSliderData} />
        <CompaniesSlider />
        <SildersContent silderData={mentorSliderData} />
        <FrequentQuestions />
      </div>
    </>
  );
}

export default App;

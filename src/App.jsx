import "./App.css";
import Navbar from "./features/Navbar";
import TechSliderBox from "./features/TechSliderBox";
import Banner from "./sections/Banner";
import CourseContent from "./sections/CourseContent";
import Promotions from "./sections/Promotions";
import Scope from "./sections/Scope";
import TopSkills from "./sections/TopSkills";

function App() {
  return (
    <>
      <div className="font-heebo w-full max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Promotions />
        <Scope />
        <TopSkills />
        <TechSliderBox />
        <CourseContent />
      </div>
    </>
  );
}

export default App;

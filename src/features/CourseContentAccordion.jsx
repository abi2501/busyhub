import React, { useState } from "react";
import CourseAccordionItem from "../components/CourseAccordionItem";
import { courseContent } from "../constants/constant";
import bluearrow from "./../assets/images/blue-arrow.png";

function CourseContentAccordion() {
  const initState = [courseContent[0], courseContent[1], courseContent[2]];

  const [courseList, setCourseList] = useState([
    ...initState.map((ele) => {
      return { ...ele, state: false };
    }),
  ]);

  const handleMoreCourseContent = (s) => {
    setCourseList([
      ...courseContent.map((ele) => {
        return { ...ele, state: false };
      }),
    ]);
  };

  const handleExpand = () => {
    setCourseList(
      [...courseContent].map((ele) => {
        return { ...ele, state: true };
      })
    );
  };

  return (
    <>
      <div className="3/4 flex flex-col flex-wrap">
        <div className="flex flex-row ml-auto pb-3">
          <h5>
            <button
              className="text-red-600 cursor-pointer"
              onClick={() => handleExpand()}
            >
              Expand all sections
            </button>
          </h5>
        </div>
        {/* <!--------------------------------------------- Course Accordion ---------------------------------------------> */}
        <div className="flex flex-wrap flex-col">
          {courseList.map((course, idx) => (
            <CourseAccordionItem
              key={idx}
              state={idx === 0 ? true : course.state}
              title={course.title}
              datalist={course.items}
              isList={true}
            />
          ))}
          <button
            className="flex flex-row bg-[#E0F4FD] w-full justify-center border-2 cursor-pointer p-3"
            style={{ borderColor: "#9BD9F0" }}
            onClick={() => handleMoreCourseContent(false)}
          >
            <p style={{ color: "#12A9EA" }}>More Syllabus</p>
            <img className="object-center" src={bluearrow} />
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseContentAccordion;

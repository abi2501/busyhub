import React from "react";
import { frequentQuestionsData } from "../constants/constant";
import CourseAccordionItem from "../components/CourseAccordionItem";

function FrequentQuestions() {
  return (
    <div className="w-3/4 flex flex-wrap flex-col mt-10 bg-[#F6F6F9] mb-40">
      <div className="flex flex-wrap flex-col p-5">
        <h1>Frequently Asked Questions</h1>
        <p className="w-3/4 pt-5">
          Best-in-class content by leading faculty and industry leaders in the
          form of videos, cases and projects, assignments and live sessions
        </p>
      </div>
      <div className="flex flex-wrap flex-col p-5">
        {frequentQuestionsData.map((ques, idx) => (
          <CourseAccordionItem
            key={idx}
            state={true}
            title={ques.title}
            datalist={ques.content}
            isList={false}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentQuestions;

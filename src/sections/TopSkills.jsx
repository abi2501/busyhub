import React from "react";
import TickListBox from "../components/TickListBox";
import { topSkills } from "../constants/constant";
import SkillsList from "../features/SkillsList";
import PlayListBox from "../features/PlayListBox";

function TopSkills() {
  return (
    <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto pt-10">
      <div className="w-3/4">
        <div className="flex flex-col">
          <TickListBox data={topSkills} isVertical={true} />
          <SkillsList />
        </div>
      </div>
      <div className="w-1/4">
        <PlayListBox />
      </div>
    </div>
  );
}

export default TopSkills;

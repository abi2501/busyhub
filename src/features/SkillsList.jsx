import React from "react";
import TickListBox from "../components/TickListBox";
import {
  badgeOfHonour,
  jobOpportunities,
  minEligibility,
} from "../constants/constant";
import { ColoredBox } from "../components/StyledComponents";

function SkillsList() {
  return (
    <div className="grid">
      <div className="grid grid-cols-2">
        <ColoredBox bg="#E9FAFF">
          <h1>Who is this program for?</h1>
          <p className="pt-3">
            Web developers, IT professionals, students and professionals who
            aspire to become Full-stack developers.
          </p>
        </ColoredBox>
        <ColoredBox bg="#FFDFD4">
          <TickListBox data={minEligibility} isVertical={true} />
        </ColoredBox>
      </div>
      <div className="flex flex-col">
        <ColoredBox bg="#FFEED6">
          <TickListBox data={jobOpportunities} isVertical={false} />
        </ColoredBox>
      </div>
      <div className="flex flex-col">
        <ColoredBox bg="#F3F8FF">
          <TickListBox data={badgeOfHonour} isVertical={true} />
        </ColoredBox>
      </div>
    </div>
  );
}

export default SkillsList;

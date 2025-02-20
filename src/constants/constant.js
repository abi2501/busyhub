export const topSkills = {
  title: "Top Skills You Will Learn",
  items: [
    "Learn front-end and back-end advanced frameworks.",
    "Learn React/Angular framework",
    "Training for top global product companies",
    "Perk of knowing a cluster of applications: Windows, Web and Mobile",
    "Training to help you handle servers, databases and clients.",
    "Getting you ready for the interview process to ace it effortlessly.",
    "Build programs from scratch with the guidance of trainers.",
    "Complete knowledge on developing a web framework.",
  ],
};

export const minEligibility = {
  title: "What is the Minimum Eligibility?",
  items: [
    "Completion of higher secondary education",
    "Anyone with the interest and passion to learn this subject.",
  ],
};

export const jobOpportunities = {
  title: "Job opportunities",
  items: [
    "Full Stack Web developer",
    "Server/ Client software developer",
    "Web/ Mobile stack developer.",
  ],
};

export const badgeOfHonour = {
  title: "Job opportunities",
  items: [
    "Complete all the lectures and projects to get certified by BusyHubs.",
    "Share the authentication of your skill in your LinkedIn network and stand out to your colleagues and recruiters.",
    "Add the case studies to your resume/portfolio and make your resume appealing and notable.",
    "Get exclusive access to our learners community across the country.",
    "Access to our in-demand 4-hours long interview training to help you ace the job interviews.",
  ],
};

const techTools = import.meta.glob("/src/assets/images/tech/*.png", {
  eager: true,
});

export const techToolsImagesSrc = Object.values(techTools).map(
  (img) => img.default
);

export const keyInclusions = {
  title: "Key Inclusions",
  items: [
    "8 hours/week live training",
    "Real-time projects",
    "Interview training",
    "Any time accessible video lectures ",
    "Certificate of Excellence ",
  ],
};

export const courseFeatures = [
  {
    count: "100+",
    title: "Hours of content",
    borderClr: "#3B90E3",
  },
  {
    count: "6+",
    title: "Case Study and Projects",
    borderClr: "#8C57CF",
  },
  {
    count: "50+",
    title: "Live Sessions",
    borderClr: "#EB5579",
  },
  {
    count: "17+",
    title: "Tools and Software",
    borderClr: "#65BB92",
  },
];

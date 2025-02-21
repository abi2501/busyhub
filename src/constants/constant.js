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

const hiringCompanies = import.meta.glob("/src/assets/images/hiring/*.png", {
  eager: true,
});

export const hiringCompaniesSrc = Object.values(hiringCompanies).map(
  (img) => img.default
);

const tutorCompanies = import.meta.glob("/src/assets/images/companies/*.png", {
  eager: true,
});

export const tutorCompaniesSrc = Object.values(tutorCompanies).map(
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

export const courseContent = [
  {
    title: "Selenium with Java",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "API Automation + Postman",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Rest Assured + Postman",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Performance Testing",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Introduction Automation Testing",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Introduction to Selenium",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Front End - React",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
  {
    title: "Front End - Angular",
    items: [
      "1. Introduction Automation Testing",
      "2. Introduction to Selenium",
    ],
  },
];

const learnersDatalist = [
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/profile/profile.png`,
    name: "Ramesh",
    role: "Full Stack QA Engineer",
    content:
      "As a student, I wanted to learn all the advanced concepts of automation testing and tools required to land a good job. I chose this course as it covers all the concepts, languages and tools needed to be a Full Stack QA engineer. Mentors were friendly, and now I am confident that I can crack the job. ",
    date: "Feb 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/profile1.png",
    name: "Hari",
    role: "Testing Engineer",
    content:
      "As a student, I wanted to learn all the advanced concepts of automation testing and tools required to land a good job. I chose this course as it covers all the concepts, languages and tools needed to be a Full Stack QA engineer. Mentors were friendly, and now I am confident that I can crack the job. ",
    date: "May 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/profile.png",
    name: "Sowmya",
    role: "QA Support",
    content:
      "As a student, I wanted to learn all the advanced concepts of automation testing and tools required to land a good job. I chose this course as it covers all the concepts, languages and tools needed to be a Full Stack QA engineer. Mentors were friendly, and now I am confident that I can crack the job. ",
    date: "June 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/profile1.png",
    name: "Sugan",
    role: "Senior Developer",
    content:
      "As a student, I wanted to learn all the advanced concepts of automation testing and tools required to land a good job. I chose this course as it covers all the concepts, languages and tools needed to be a Full Stack QA engineer. Mentors were friendly, and now I am confident that I can crack the job. ",
    date: "April 2020",
  },
];

export const learnerSliderData = {
  title: "What Our Learner’s Say",
  subtitle:
    "We provide the best learning experience tailored to suit the needs of the students.",
  datalist: learnersDatalist,
  isQouted: true,
};

export const tutorSliderData = {
  title: "What Our Tutor Say",
  subtitle:
    "We provide the best learning experience tailored to suit the needs of the students.",
  datalist: learnersDatalist,
  isQouted: true,
};

const metorsDatalist = [
  {
    imgSrc: "/public/assets/images/profile/avatar.png",
    name: "Ayyamuthu Archunan",
    role: "",
    content:
      "It’s the senior Automation testing Specialisti. With over 7 years of experience in automation testing, he’s an established professional, an experienced scrum master and is certified by profound organizations like AWS and ISTQB. ",
    date: "Feb 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/avatar.png",
    name: "Karthick",
    role: "",
    content:
      "With 8+ years of experience in Automation testing, Karthick is a certified scrum master and proficient automation architect. He's an experienced trainer and specialises in helping people learn advanced testing concepts at ease.",
    date: "Feb 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/avatar.png",
    name: "Jeevan",
    role: "",
    content:
      "With 8+ years of experience in Automation testing, Karthick is a certified scrum master and proficient automation architect.  He's an experienced trainer and specialises in helping people learn advanced testing concepts at ease.",
    date: "Feb 2020",
  },
  {
    imgSrc: "/public/assets/images/profile/avatar.png",
    name: "Ravi",
    role: "",
    content:
      "With 8+ years of experience in Automation testing, Karthick is a certified scrum master and proficient automation architect. He's an experienced trainer and specialises in helping people learn advanced testing concepts at ease.",
    date: "Feb 2020",
  },
];

export const mentorSliderData = {
  title: "Get to know your Mentor",
  subtitle:
    "Learn from India’s leading full stack development faculty and industry leaders.",
  datalist: metorsDatalist,
  isQouted: false,
};

export const frequentQuestionsData = [
  {
    title: "Who is eligible for this course?",
    content:
      "Any student or professional who aspires to build a career as SDET can take this course. Basic knowledge of coding and computers is needed. ",
  },
  {
    title: "How is this course different from other courses in the market?",
    content:
      "BusyHubs is all about providing the best learning experience customized to help you learn at your comfortable pace. Once you enrol for the course, our team will reach out to you to understand your knowledge of coding and logical reasoning. This will help us plan your training in the most optimal way.",
  },
  {
    title: "How to request for a refund?",
    content:
      "Our understanding of the course and satisfaction is our priority. If you face any challenges while taking up the course and wish to discontinue, you can write a mail to karthick@busyhubs.com with your feedback and your request will be looked upon as soon as possible.",
  },
  {
    title: "Before how many days can I initiate a refund? ",
    content:
      "You can request for a refund within 2 days of enrolling to the course",
  },
];

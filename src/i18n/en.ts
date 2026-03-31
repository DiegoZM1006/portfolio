export const en = {
  meta: {
    lang: "en",
    title: "Diego Mueses | Full-Stack Developer & Software Engineer",
    description:
      "Portfolio of Diego Fernando Mueses Zuñiga - Full-Stack Developer specializing in React, Next.js, NestJS, and mobile development. Explore my projects and get in touch.",
    keywords:
      "Diego Mueses, Full-Stack Developer, Software Engineer, React, Next.js, NestJS, TypeScript, PostgreSQL, React Native, Web Development, Mobile Development, Cali Colombia",
    siteName: "Diego Mueses Portfolio",
  },
  nav: {
    resume: "Resume",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact me",
    close: "Close",
    socials: "Socials",
    switchLang: "ES",
    switchLangLabel: "Switch to Spanish",
    switchLangHref: "/es/",
  },
  hero: {
    tagline: "Systems/Software Engineer & Full-Stack Developer",
    headline: "I design and build end-to-end web and mobile applications.",
    description:
      "With a problem-solving mindset and a focus on clean architecture, I design and implement solutions that improve performance, enhance user experience, and drive measurable impact. I enjoy collaborating in agile teams and turning complex ideas into functional products.",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
  },
  work: {
    title: "My Work Experience",
    resume: [
      {
        position: "Apprentice Trainee",
        achievements: [
          "Identify opportunities for using AI in research, analysis, and design processes.",
          "Design AI-assisted solutions and workflows.",
          "Use generative AI tools to automate tasks.",
        ],
      },
      {
        position: "Full-Stack Developer",
        achievements: [
          "Implemented frontend features using Next.js, improving user retention by 15% through a smoother and more intuitive experience.",
          "Developed and optimized backend services in NestJS integrated with relational databases such as PostgreSQL, reducing response times by 20% and increasing overall system consistency.",
          "Contributed to the development of a mobile application using React Native for Android and iOS, enhancing platform accessibility and expanding reach to mobile users.",
        ],
      },
      {
        position: "Frontend Development Lead",
        achievements: [
          "Led the full frontend development of the project, building modern and responsive interfaces that improved user experience by 25%.",
          "Implemented reusable components and best practices in React, reducing the team's development time by 30%.",
          "Integrated the frontend with external APIs, ensuring smooth navigation and achieving up to 20% faster load times.",
        ],
      },
      {
        position: "Class Monitor (Introduction to Systems Engineering)",
        achievements: [
          "Evaluated student assignments to ensure academic and technical standards, receiving 95% positive feedback from lead professors.",
          "Guided students on projects and coursework, contributing to a 12% improvement in their average grades.",
          "Organized and facilitated review sessions, increasing student participation by 20%.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my notable works",
    viewProject: "View Project",
    technologies: "Technologies:",
    close: "Close",
    items: [
      {
        description: "Platform to find job opportunities and connect with employers.",
      },
      {
        description: "E-commerce platform for urban fashion and streetwear.",
      },
    ],
  },
  skills: {
    title: "Tools & Technologies",
  },
  about: {
    title: "About Me",
    intro:
      "I'm <span class=\"text-accent\">Diego M. Zuñiga</span>, a 21-year-old Systems Engineer from Cali, Colombia, passionate about building digital products that make people's lives easier.",
    photosCaption: "Some photos from my last trip in Ecuador 🇪🇨.",
    body: "Currently, I'm expanding my skills in <span class=\"font-semibold\">DevOps</span> — exploring Linux environments, CI/CD pipelines, and cloud infrastructure<br /><br />Outside of code, you'll find me cheering for Deportivo Cali, listening to all kinds of music (salsa, electronic, rap, and more), or playing competitive games like Fortnite. My long-term goal is to <span class=\"font-bold\">lead impactful tech projects</span> and guide teams to build products that truly improve people's lives.",
  },
  contact: {
    badge: "Let's build something together",
    title:
      "Open to collaborations, freelance work, or full-time opportunities. Feel free to reach out!",
  },
  form: {
    fullName: "Full Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "johnDoe@gmail.com",
    projectType: "Project Type",
    projectTypes: {
      webDev: "Web Development",
      mobileApp: "Mobile App",
      uiux: "UI/UX Design",
      other: "Other",
    },
    message: "Message",
    messagePlaceholder: "Write your message here...",
    errors: {
      nameMin: "Name must be at least 2 characters",
      emailInvalid: "Invalid email address",
      messageMin: "Message must be at least 10 characters",
    },
    success: "✅ Message sent successfully! I'll get back to you soon.",
    error: "❌ Failed to send message. Please try again.",
    submit: "Send Message",
    submitting: "Sending...",
  },
  footer: {
    madeWith: "Made with",
  },
} as const;

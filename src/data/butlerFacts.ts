export const butlerFacts = {
  name: 'Yoojun Kim',
  email: 'yjkxlr8tion@gmail.com',
  github: 'https://github.com/yjk82693',
  linkedin: 'https://www.linkedin.com/in/yoojun-kim-5899051a5',

  bio: 'Yoojun Kim is a Computer Science and Mathematics student at Penn State (GPA 3.57), expecting to graduate in May 2027. Inspired by the creativity of Disney and Nintendo, he pursues both full-stack web development and game development, with internship experience at NHN, Lunexio, CoconeM, and Kim & Chang, and service in the Republic of Korea Army.',

  skills: [
    'TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'C#',
    'React', 'Next.js', 'Vite', 'Node.js', 'Express', 'Prisma',
    'Spring', 'MySQL', 'Redis', 'SQLite', 'REST API',
    'Unity', 'Pygame', 'Git', 'Linux', 'AWS',
  ],

  projects: [
    {
      slug: 'tetrisaga',
      title: 'Tetrisaga',
      what: 'A solo-developed Unity roguelike where Tetris mechanics trigger PvE combat with elemental effects. AI was used to accelerate the game skeleton — level structure, enemy logic, progression curves.',
      hard: 'Designing the combat loop so line clears felt satisfying as both a puzzle and an attack.',
      tech: ['Unity', 'C#'],
    },
    {
      slug: 'studio-os',
      title: 'Studio OS',
      what: 'A full-stack internal tool for game studios — Monaco editor, commit system, role management, threaded feedback.',
      hard: 'Integrating Monaco editor into a React app with a real file/commit model.',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite'],
    },
    {
      slug: 'planner',
      title: 'Planner',
      what: 'A productivity app with a 9x9 Mandal-art goal grid, reward system, shop, and PDF report generation.',
      hard: 'Building the Mandal-art grid with linked goal propagation across all 9 sub-grids.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite'],
    },
    {
      slug: 'gamebase',
      title: 'Gamebase Clone',
      what: 'A full-stack clone of NHN Gamebase — core game platform backend infrastructure including authentication, game data management, and platform APIs.',
      hard: 'Replicating the architecture of a production-grade game backend platform.',
      tech: ['Java', 'Spring', 'MySQL', 'Redis'],
    },
    {
      slug: 'game-map-creator',
      title: 'Game Map Creator',
      what: 'A grid-based map tool for game developers with a block palette, file manager, and fill/erase tools.',
      hard: 'Implementing the select + fill tool with correct boundary detection on large grids.',
      tech: ['React', 'TypeScript', 'Vite'],
    },
    {
      slug: 'portfolio-v1',
      title: 'Portfolio v1',
      what: 'First personal portfolio with hand-drawn life story phases and Pygame game showcase.',
      hard: 'Designing the "Story of My Life" phase cards with consistent hand-drawn illustrations.',
      tech: ['React', 'TypeScript', 'Vite'],
    },
    {
      slug: 'portfolio-v2',
      title: 'Portfolio v2 — AI Estate',
      what: 'This portfolio — a butler-guided estate with Sharvis, an AI shark concierge built on Claude.',
      hard: 'Building a grounded, tool-using AI agent that navigates the portfolio and never invents facts.',
      tech: ['React', 'TypeScript', 'Vite', 'Claude API'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer Intern — Game Platform Server Team',
      where: 'NHN',
      when: 'Jul 2026 – Aug 2026',
      did: 'Leveraged AI tools to architect log tracking data structures and build metric aggregation logic using Java, Spring, MySQL, and Redis. Defined cohorts and segments for Gamebase payment service.',
    },
    {
      role: 'Software and AI Engineer Intern',
      where: 'Lunexio',
      when: 'May 2026 – Jul 2026',
      did: 'Built a full-stack document management platform for Korean corporate documents. Designed a rule-based Excel field-extraction engine for semi-structured Korean corporate forms.',
    },
    {
      role: 'Learning Assistant — CMPSC 204',
      where: 'Penn State University',
      when: 'Feb 2026 – May 2026',
      did: 'Assisted students in understanding core OOP and functional programming concepts through lab sessions and discussions.',
    },
    {
      role: 'AI Research and IT Assistant Intern',
      where: 'Kim & Chang Law Firm',
      when: 'Oct 2024 – Dec 2024',
      did: 'Conducted AI research and prepared detailed reports. Facilitated IT knowledge transfer for non-technical staff.',
    },
    {
      role: 'Sergeant',
      where: 'Republic of Korea Army',
      when: 'Mar 2023 – Sep 2024',
      did: 'Trained soldiers in tactical and communication skills. Maintained military communication devices. Outlined 10+ GDDs during service.',
    },
    {
      role: 'Fall Intern',
      where: 'CoconeM',
      when: 'Sep 2022 – Dec 2022',
      did: 'Developed a URL-sharing tool for digital name card exchanges. Enhanced web app usability using React and TypeScript.',
    },
  ],

  phases: {
    youth: 'Grew up in Seoul, did a homestay in North Carolina and moved to Virginia — first exposure to a wider world. Later attended international school in Singapore.',
    highschool: 'Attended UWCSEA in Singapore, struggled and found resilience — discovered computer science as the bridge between storytelling and technology after watching Frozen 2.',
    university: 'Penn State CS + Math student (GPA 3.57), built real full-stack and game projects, worked at CoconeM, served in the Korean Army.',
    afterservice: 'Military service sharpened discipline and sparked a conviction: AI could empower creatives, not just engineers. Carried a notebook, outlined 10+ GDDs during service.',
    now: 'Using AI in practice — built Tetrisaga with AI-assisted skeleton, led Guardians of the Milky Way, interned at Lunexio and NHN. Actively seeking a software engineering internship.',
  },
}
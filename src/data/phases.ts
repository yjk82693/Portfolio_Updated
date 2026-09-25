export type Slide = {
  image?: string
  text: string
}

export type Phase = {
  id: string
  number: number
  romanNumeral: string
  title: string
  blurb: string
  yearRange: string
  slides: Slide[]
}

export const phases: Phase[] = [
  {
  id: 'youth',
  number: 1,
  romanNumeral: 'I',
  title: 'Youth',
  blurb: 'Where it began',
  yearRange: '2006 – 2016',
  slides: [
    {
      image: '/phases/youth/slide1.jpg',
      text: 'Growing up in Seoul, I was like the frog in the well — my small neighborhood was my whole world. Familiar streets, familiar faces, school, home, repeat. I didn\'t know how small that world was until my parents told me I\'d be spending the summer in the United States. Not with them. Alone. All I could think was: America is enormous, and I was just a frog about to leave the well for the first time.',
    },
    {
      image: '/phases/youth/slide2.jpg',
      text: 'I landed in North Carolina and moved in with a host family for three months, barely understanding the language. Nerf guns, Lego, Nintendo — things I\'d never really had at home, but the neighborhood kids were obsessed with them too. Sharing the same hobbies gave us a way to connect even when the words didn\'t. Slowly the walls came down — I started joining in, laughing at jokes I half-understood, opening up more than I expected to.',
    },
    {
      image: '/phases/youth/slide3.jpg',
      text: 'When the three months ended, it felt like that chapter was closed — a good experience, but a finished one. I went back to Korea and didn\'t expect to return. Then, a year later, the chance came again: this time to move with my family to Williamsburg, Virginia. I hesitated. Part of me still treated that first trip as my one shot, something already used up. But once we were there, everything opened up. New York City. Boston and its universities. Orlando, Florida — Disney World, Universal Studios, Legoland, SeaWorld. Even Alaska. Each place added a piece I hadn\'t known was missing, and the passion to see more only grew. My pull toward the U.S. wasn\'t fading — it was expanding. That was when I decided, for real this time: I would come back.',
    },
  ],
},
  {
    id: 'highschool',
    number: 2,
    romanNumeral: 'II',
    title: 'High School & The Spark',
    blurb: 'How curiosity became a direction',
    yearRange: '2016 – 2020',
    slides: [
      {
        text: 'My desire to explore led me to UWCSEA in Singapore — an international school, a dormitory, a fresh start. But it didn\'t unfold the way I imagined. Jumping straight into Grade 10, skipping Grade 9 entirely, I found myself thrown into the IB curriculum with almost no time to adapt. Isolated, homesick, competing in a second language against native English speakers — I struggled in ways I hadn\'t anticipated.',
      },
      {
        text: 'The wake-up call came quietly, in the form of a grade report. Friends who once stood beside me academically were now far ahead. It was hard to accept. But instead of retreating, I started asking a different question — not "why am I behind?" but "what do I actually care about?" My parents encouraged me to look inward rather than compare outward. Slowly, something shifted.',
      },
      {
        text: 'I started writing. Fan-fiction, at first just for myself — then online, where it quietly gathered an audience and eventually crossed a million views. Storytelling had always been there, but I hadn\'t taken it seriously until it was the one thing bringing me genuine joy. It reminded me that creating things that resonate with people wasn\'t just a hobby. It was what I wanted to do.',
      },
      {
        text: 'Then I watched Frozen 2. It brought back something I\'d felt as a kid — the way Disney films could move you, regardless of age. I knew then that I wanted to create stories like that. Like Disney, like Studio Ghibli. The question was how. The answer, eventually, was computer science — close enough to animation to feel right, grounded enough to build on. That decision set everything else in motion.',
      },
    ],
  },
  {
    id: 'university-army',
    number: 3,
    romanNumeral: 'III',
    title: 'University & Beyond',
    blurb: 'Diving deeper into computer science',
    yearRange: '2020 – 2023',
    slides: [
      {
        text: 'When I arrived at Penn State, computer science opened up further than I expected. It wasn\'t just animation or games anymore — it was systems, algorithms, full-stack architecture, AI. The deeper I went, the more I realized the field wasn\'t a means to an end. It was the thing itself. During COVID, games like Super Mario and Zelda had been a lifeline. Now I wanted to understand how those worlds were built — and eventually, build my own.',
      },
      {
        text: 'I started with the fundamentals — C, Java, Python — and found that the harder the problem, the more I wanted to solve it. Theory of Computation, Differential Equations, Systems Programming. Each course pushed me further. I began to see computer science not as a collection of tools but as a way of thinking — structured, creative, and precise all at once.',
      },
      {
        text: 'The projects came quickly. A Tetris clone. A Snake game. Orca\'s Rush — my first real step into game development. Then bigger things: Planner, a full-stack productivity app with a Mandal-art goal grid. Studio OS, an internal management platform for a game studio with a Monaco editor and commit system. Each one taught me something the classroom couldn\'t.',
      },
      {
        text: 'Outside Penn State, I worked as a Learning Assistant for CMPSC 204, helping students navigate AI and machine learning. I interned at CoconeM in Seoul working on mobile games. The Army came in between — two years of mandatory service that sharpened discipline and gave me perspective. By the time I returned to campus, I knew exactly what I was building toward.',
      },
    ],
  },
  {
    id: 'after-service',
    number: 4,
    romanNumeral: 'IV',
    title: 'After Service',
    blurb: 'The insight that changed everything',
    yearRange: '2023 – 2025',
    slides: [
      {
        text: 'Military life was rigid in a way nothing else had been. No personal time, no creative freedom, no pace of my own. But I carried a notebook. Whenever a spare moment appeared — and they were rare — I wrote. Over two years of service, I outlined more than ten Game Design Documents and drafted scripts for animations I hadn\'t yet built. The ideas didn\'t stop. If anything, the constraint made them sharper.',
      },
      {
        text: 'It was in the army that I first started thinking seriously about AI — not as a buzzword, but as a creative tool. I watched how it was beginning to reshape gaming and animation, making these mediums more accessible to people without traditional technical expertise. That idea stayed with me. People who dream of building worlds but lack the resources or skills to do it. What if the gap could be closed?',
      },
      {
        text: 'The military taught me perseverance and adaptability in ways academia never could. But the more lasting lesson was about purpose. I came out of service with a clearer conviction: technology — specifically AI — could be used to empower creatives. Not replace them. Empower them. Give people the ability to turn imagination into something real, regardless of their technical background.',
      },
    ],
  },
  {
    id: 'now',
    number: 5,
    romanNumeral: 'V',
    title: 'Now',
    blurb: 'Where the work becomes real',
    yearRange: '2025 – Present',
    slides: [
      {
        text: 'Back at Penn State, I stopped theorizing about AI and started using it. Tetrisaga began as a design document — now it\'s a Unity roguelike with a combat system built around Tetris mechanics and elemental effects. AI accelerated the skeleton: level structure, enemy logic, progression curves. What would have taken months of solo iteration compressed into something I could actually see and test.',
      },
      {
        text: 'Leading the team on Guardians of the Milky Way gave me a different kind of sense. Game 480 — a full production course — meant coordinating artists, designers, and engineers toward a shipping deadline. I learned that leading a creative team isn\'t about having all the answers. It\'s about keeping the vision clear when everything else is moving. We shipped a complete game. That feeling doesn\'t go away.',
      },
      {
        text: 'At Lunexio, I built document management tools for Korean industrial clients — full-stack, production-grade, used by real engineers. AI was woven into the workflow: parsing, classification, retrieval. At NHN, I worked on a Gamebase clone, building backend infrastructure for game platform services. Each project sharpened the same instinct — AI isn\'t a shortcut. It\'s a multiplier, when you know how to aim it.',
      },
      {
        text: 'The sense I\'ve been building toward is finally coming into focus. I know how to architect a system, lead a team, ship a product, and use AI as a genuine development tool — not a novelty. The next step is an internship that pushes all of it further. After that, the company. The one that makes creativity accessible the way Disney made stories accessible. That\'s still the goal. It always was.',
      },
    ],
  },
]
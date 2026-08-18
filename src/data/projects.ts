export type Screenshot = {
  image: string
  caption: string
}

export type Project = {
  slug: string
  title: string
  blurb: string
  description: string
  category: 'frontend' | 'fullstack' | 'backend' | 'game' | 'tools'
  image?: string
  github?: string
  demo?: string
  designDoc?: string
  screenshots?: Screenshot[]
  status: 'complete' | 'in-progress'
  evolvedFrom?: string
  evolvedInto?: string
}

export const projects: Project[] = [
  {
    slug: 'tetrisaga',
    title: 'Tetrisaga',
    blurb: 'A Tetris-based PvE combat roguelike with elemental mechanics.',
    description: 'A solo-developed Tetris-based PvE combat roguelike built in Unity 6. Features elemental attack mechanics, enemy encounters triggered by line clears, and roguelike progression. AI was used to accelerate the game skeleton — level structure, enemy logic, progression curves.',
    category: 'game',
    status: 'in-progress',
    evolvedFrom: 'tetris',
  },
  {
    slug: 'studio-os',
    title: 'Studio OS',
    blurb: 'Internal management system for a game development studio.',
    description: 'A full-stack internal management system for a game development company. Features VS Code-style Monaco file workspace, commit system, user/role management, project management, and threaded feedback.',
    category: 'fullstack',
    github: 'https://github.com/yjk82693/StudioOS',
    status: 'complete',
  },
  {
    slug: 'planner',
    title: 'Planner',
    blurb: 'A personal productivity app with Mandal-art goal tracking.',
    description: 'A personal productivity web app with a 9x9 Mandal-art goal grid, daily routine tracker with a point/reward system, shop, PDF daily report generation, to-do list, and course tracker.',
    category: 'fullstack',
    github: 'https://github.com/yjk82693/Planner-Online-Tool',
    status: 'complete',
  },
  {
    slug: 'gamebase',
    title: 'Gamebase Clone',
    blurb: 'A clone of NHN Gamebase — backend infrastructure for game platform services.',
    description: 'A full-stack clone of NHN Gamebase, building core game platform backend infrastructure including user authentication, game data management, and platform service APIs. Built during work at NHN.',
    category: 'fullstack',
    github: 'https://github.com/yjk82693/BasicGamePlatform',
    status: 'complete',
  },
  {
  slug: 'game-map-creator',
  title: 'Game Map Creator',
  blurb: 'A grid-based map creation tool for game developers.',
  description: 'A grid-based map creation tool for game developers. Features a block palette, file manager organizing exported maps by game folder, and a select tool with fill, erase, and deselect functionality.',
  category: 'tools',
  github: 'https://github.com/yjk82693/GameMapCreator',
  status: 'complete',
  screenshots: [
    { image: '/screenshots/game-map-creator/Default.png', caption: 'Default view — Map Generator with block palette and 40×40 grid' },
    { image: '/screenshots/game-map-creator/NightMode.png', caption: 'Night mode — dark canvas for extended editing sessions' },
    { image: '/screenshots/game-map-creator/SelectTileAndAdd.png', caption: 'Select tile and add custom block types' },
    { image: '/screenshots/game-map-creator/Erase.png', caption: 'Eraser tool — precision tile removal' },
    { image: '/screenshots/game-map-creator/SelectGroup.png', caption: 'Select Region — group selection with fill and erase actions' },
    { image: '/screenshots/game-map-creator/ExpandMap.png', caption: 'Expand +5 — quick grid expansion with tooltip' },
    { image: '/screenshots/game-map-creator/CustomizedExpansion.png', caption: 'Custom Expand — set exact row and column expansion values' },
  ],
},
  {
    slug: 'tetris',
    title: 'Tetris',
    blurb: 'Classic Tetris built with Pygame.',
    description: 'A classic Tetris game built with Pygame, featuring block rotation, line clearing, and increasing difficulty.',
    category: 'game',
    github: 'https://github.com/yjk82693',
    status: 'complete',
    evolvedInto: 'tetrisaga',
  },
  {
    slug: 'snake-game',
    title: 'Snake Game',
    blurb: 'A modern twist on the classic Snake game.',
    description: 'A modern twist on the classic Snake game, where players navigate a growing snake to eat food while avoiding collisions.',
    category: 'game',
    github: 'https://github.com/yjk82693',
    status: 'complete',
  },
  {
    slug: 'orcas-rush',
    title: "Orca's Rush",
    blurb: "A Flappy Bird-inspired underwater obstacle game.",
    description: "A Flappy Bird-inspired game with an orca navigating underwater obstacles while collecting points.",
    category: 'game',
    github: 'https://github.com/yjk82693',
    status: 'complete',
  },
  {
  slug: 'portfolio-v1',
  title: 'Portfolio v1',
  blurb: 'My first personal portfolio — a React multi-page site with a life story section.',
  description: 'My first personal portfolio built with React. Featured a hand-drawn "Story of My Life" phase gallery, a projects section with Pygame games, and an About Me page. Built in 2024.',
  category: 'frontend',
  github: 'https://github.com/yjk82693/portfolio',
  demo: 'https://portfolio-18fp5bi9q-yoojun-kims-projects.vercel.app/',
  status: 'complete' as const,
  evolvedInto: 'portfolio-v2',
},
{
  slug: 'portfolio-v2',
  title: 'Portfolio v2 — AI Estate',
  blurb: 'This portfolio — a butler-guided estate with Sharvis, an AI concierge.',
  description: 'A complete redesign of my personal portfolio as a butler-guided estate. Features Sharvis, a JARVIS-style AI shark concierge built on Claude, grounded navigation tools, session-depth persona shifts, and a white/blue + black/gold dual theme across four spaces: Welcome, The Estate, The Gallery, and The Report.',
  category: 'frontend',
  github: 'https://github.com/yjk82693/AIPortfolio',
  status: 'in-progress' as const,
  evolvedFrom: 'portfolio-v1',
},
]
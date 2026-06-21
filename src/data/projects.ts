export type Project = {
  id: string
  title: string
  description: string
  category: 'game' | 'web' | 'tools'
  stack: string[]
  github?: string
  demo?: string
  readme?: string
  image?: string
  status: 'complete' | 'in-progress'
}

export const projects: Project[] = [
  {
    id: 'tetrisaga',
    title: 'Tetrisaga',
    description: 'A solo-developed Tetris-based PvE combat roguelike with elemental mechanics built in Unity 6.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Design'],
    status: 'in-progress',
  },
  {
    id: 'studio-os',
    title: 'Studio OS',
    description: 'A full-stack internal management system for a game development company. Features VS Code-style Monaco file workspace, commit system, user/role management, project management, and threaded feedback.',
    category: 'web',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Ant Design'],
    github: 'https://github.com/yjk82693/StudioOS',
    status: 'complete',
  },
  {
    id: 'planner',
    title: 'Planner',
    description: 'A personal productivity web app with a 9x9 Mandal-art goal grid, daily routine tracker with a point/reward system, shop, PDF daily report generation, to-do list, and course tracker.',
    category: 'web',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Ant Design'],
    github: 'https://github.com/yjk82693/Planner-Online-Tool',
    status: 'complete',
  },
  {
    id: 'game-map-creator',
    title: 'Game Map Creator',
    description: 'A grid-based map creation tool for game developers. Features a block palette, file manager organizing exported maps by game folder, and a select tool with fill, erase, and deselect functionality.',
    category: 'tools',
    stack: ['React', 'TypeScript', 'Vite', 'Ant Design'],
    github: 'https://github.com/yjk82693/GameMapCreator',
    status: 'complete',
  },
  {
    id: 'tetris',
    title: 'Tetris',
    description: 'A classic Tetris game built with Pygame, featuring block rotation, line clearing, and increasing difficulty.',
    category: 'game',
    stack: ['Python', 'Pygame'],
    github: 'https://github.com/yjk82693',
    status: 'complete',
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    description: 'A modern twist on the classic Snake game, where players navigate a growing snake to eat food while avoiding collisions.',
    category: 'game',
    stack: ['Python', 'Pygame'],
    github: 'https://github.com/yjk82693',
    status: 'complete',
  },
  {
    id: 'orcas-rush',
    title: "Orca's Rush",
    description: 'A Flappy Bird-inspired game with an orca navigating underwater obstacles while collecting points.',
    category: 'game',
    stack: ['Python', 'Pygame'],
    github: 'https://github.com/yjk82693',
    status: 'complete',
  },
]
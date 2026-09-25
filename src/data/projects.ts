export type Screenshot = {
  image: string
  caption: string
}

export type ScreenshotGroup = {
  label: string
  screenshots: Screenshot[]
}

export type Category = 'frontend' | 'fullstack' | 'backend' | 'game' | 'tools' | 'hackathon'

export type Project = {
  slug: string
  title: string
  blurb: string
  description: string
  category: Category | Category[]
  image?: string
  github?: string
  demo?: string
  designDoc?: string
  screenshots?: Screenshot[]
  screenshotGroups?: ScreenshotGroup[]
  status: 'complete' | 'in-progress'
  evolvedFrom?: string
  evolvedInto?: string
}

export const projects: Project[] = [
  {
    slug: 'last-bit-standing',
    title: 'Last Bit Standing',
    blurb: 'A last-player-standing card game teaching binary, hex, and ASCII.',
    description: 'A card game built for HopHacks 2026, blending Uno-style action cards with Rummikub-style melds and runs — across binary, octal, hex, and ASCII "suits." Rebuilt from scratch after the hackathon under the working title "basepoker." Backend runs on SpacetimeDB with a live game-table server, Next.js client with real-time table UI, and email magic-link authentication.',
    category: ['fullstack', 'game', 'hackathon'],
    image: '/screenshots/last-bit-standing/landing.png',
    github: 'https://github.com/Pespinosa2004/ai-language-showdown',
    demo: 'https://ai-language-showdown.vercel.app/',
    status: 'in-progress',
    screenshots: [
      { image: '/screenshots/last-bit-standing/landing.png', caption: 'Landing — human vs. five language models, with a sample of the binary, hex, and ASCII cards players will hold.' },
      { image: '/screenshots/last-bit-standing/live-round.png', caption: 'Live round — table view with all six players\' hearts/lives, a timed prompt, and score multiplier ticking down.' },
      { image: '/screenshots/last-bit-standing/encoding-bench.png', caption: 'Encoding bench — reference sheet for reading binary, hex, and ASCII glyphs before sitting at the table.' },
      { image: '/screenshots/last-bit-standing/letter-lamps.png', caption: 'Letter lamps reference — the 5-bit letter encoding used by some prompts, distinct from standard ASCII.' },
      { image: '/screenshots/last-bit-standing/ascii-reference.png', caption: 'ASCII reference — full glyph-to-decimal-to-hex lookup table for capital and lowercase letters, digits, and space.' },
      { image: '/screenshots/last-bit-standing/leaderboard.png', caption: 'Leaderboard — wins ranked above falls, then by points, remaining lives, and rounds survived.' },
    ],
  },
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
  image: '/screenshots/studio-os/DefaultDashboard.png',
  github: 'https://github.com/yjk82693/StudioOS',
  status: 'complete',
  screenshots: [
    { image: '/screenshots/studio-os/DefaultDashboard.png', caption: 'Dashboard — VS Code-style workspace with project file tree, Monaco editor, and multi-project support for game development teams.' },
    { image: '/screenshots/studio-os/FeedBack.png', caption: 'Feedback — Company-wide commit feed showing file changes across all projects, with threaded comments and file type filtering.' },
    { image: '/screenshots/studio-os/Chat.png', caption: 'Group Chat — Slack-style messaging with group channels and direct messages, featuring real-time polling and message history.' },
    { image: '/screenshots/studio-os/Resource.png', caption: 'Resources — Topic-based knowledge library organized by categories (Python, Unity, TypeScript) with grid/list view and search.' },
    { image: '/screenshots/studio-os/AdminExclusiveUserManagement.png', caption: 'User Management — Admin panel for managing team members, job roles, hierarchy, and multi-game project assignments.' },
    { image: '/screenshots/studio-os/AdminExclusiveProjectManagement.png', caption: 'Project Management — Admin CRUD for game projects with member assignment and file count tracking.' },
    { image: '/screenshots/studio-os/AdminExclusiveResourceManagement1.png', caption: 'Resource Management — Admin interface for uploading and organizing company resources by category and folder.' },
    { image: '/screenshots/studio-os/AdminExclusiveResourceManagement12.png', caption: 'Resource Categories — Admin panel for creating and managing topic categories that power the resource library.' },
  ],
},
  {
    slug: 'planner',
    title: 'Planner',
    blurb: 'A personal productivity app with Mandal-art goal tracking.',
    description: 'A personal productivity web app with a 9x9 Mandal-art goal grid, daily routine tracker with a point/reward system, shop, PDF daily report generation, to-do list, and course tracker.',
    category: 'fullstack',
    image: '/screenshots/planner/MandalArt.png',
    github: 'https://github.com/yjk82693/Planner-Online-Tool',
    status: 'complete',
        screenshots: [
      { image: '/screenshots/planner/MandalArt.png', caption: 'Mandal-art chart — The 9x9 visual grid at the center of the app: a main goal surrounded by 8 color-coded sub-goals, each expanding into 8 clickable tasks that earn points when completed.' },
      { image: '/screenshots/planner/GoalEditting.png', caption: 'Edit goals (collapsed view) — The same 8-sub-goal structure collapsed into a scannable list, each tracking its own task completion count.' },
      { image: '/screenshots/planner/GoalEdittingDemonstration.png', caption: 'Edit goals (expanded sub-goal) — Mandal-art goal-setting interface showing one sub-goal expanded with its 8 associated tasks ready to fill in.' },
      { image: '/screenshots/planner/CourseTracker.png', caption: 'Course tracker — Organizes academic and self-study courses into tabs (Academic / Self-study / Completed) for tracking progress across coursework.' },
      { image: '/screenshots/planner/Calender.png', caption: 'Important dates calendar — Click-to-add calendar for deadlines and events, replacing a plain date-input form with a familiar month-grid interface.' },
      { image: '/screenshots/planner/Shop.png', caption: 'Reward shop — Spend earned points on custom rewards; comes with starter defaults (Coffee, Movie night, New book) and lets users add their own with a name and cost.' },
      { image: '/screenshots/planner/PointTrackerData.png', caption: 'Point tracker (with data) — Daily point balance with earned/spent totals and a per-day log, breaking down completed tasks by date and exportable as a ZIP or PDF.' },
      { image: '/screenshots/planner/PointTrackerEmpty.png', caption: 'Point tracker (empty/demo state) — Clean onboarding view before any tasks are logged, with the same balance/earned/spent layout ready to populate.' },
    ],
  },
  {
  slug: 'basic-game-platform',
  title: 'Basic Game Platform',
  blurb: 'A full-stack game backend platform inspired by NHN Gamebase.',
  description: 'A full-stack game platform built from the ground up, inspired by NHN Gamebase\'s backend infrastructure. Features auth, catalog, redeem codes, leaderboards, purchases, payouts, support tickets, terms of use, statistics, member/role management (RBAC), an admin console, and audit logging.',
  category: 'fullstack',
  image: '/screenshots/basic-game-platform/distributor/dashboard.png',
  github: 'https://github.com/yjk82693/BasicGamePlatform',
  status: 'complete',
  screenshotGroups: [
    {
      label: 'Distributor Console',
      screenshots: [
        { image: '/screenshots/basic-game-platform/distributor/dashboard.png', caption: 'Dashboard — at-a-glance overview of revenue, pending payouts, open support tickets, team size, and all active game apps.' },
        { image: '/screenshots/basic-game-platform/distributor/catalog.png', caption: 'Catalog — distributor-side list of registered game apps with genre, active status, and enable/disable controls.' },
        { image: '/screenshots/basic-game-platform/distributor/items.png', caption: 'Catalog → Items — in-app purchase catalog per app, showing store platform, product ID, price, and active/inactive status.' },
        { image: '/screenshots/basic-game-platform/distributor/redeem-codes.png', caption: 'Catalog → Redeem Codes — serial code generation with configurable use limits, reward bundles, and expiration.' },
        { image: '/screenshots/basic-game-platform/distributor/leaderboard.png', caption: 'Catalog → Leaderboard — leaderboard board configuration with scoring type, sort order, and seasonal windows.' },
        { image: '/screenshots/basic-game-platform/distributor/support.png', caption: 'Catalog → Support — player support ticket queue with status tracking (solved/waiting).' },
        { image: '/screenshots/basic-game-platform/distributor/terms-of-use.png', caption: 'Catalog → Terms of Use — versioned terms management with locale and required-acceptance flags.' },
        { image: '/screenshots/basic-game-platform/distributor/statistics.png', caption: 'Catalog → Statistics — configurable widget dashboard for per-app metrics like DAU, revenue, and sign-ups.' },
        { image: '/screenshots/basic-game-platform/distributor/app-operations.png', caption: 'Catalog → App Operations — version rules to block, require, or mark app versions optional for compatibility control.' },
        { image: '/screenshots/basic-game-platform/distributor/payouts.png', caption: 'Payouts — pending transaction totals, linked bank accounts, and payout history with gross/fee/net breakdown.' },
        { image: '/screenshots/basic-game-platform/distributor/members-roles.png', caption: 'Members & Roles — distributor team management with role assignment (Owner, Admin, Editor, Support, Viewer).' },
        { image: '/screenshots/basic-game-platform/distributor/user-management.png', caption: 'User Management — player account search with suspend/kick moderation actions and join-date tracking.' },
        { image: '/screenshots/basic-game-platform/distributor/log-tracker.png', caption: 'Log Tracker — audit log of admin actions (e.g. role grants) with actor, target, and result, filterable by action type.' },
      ],
    },
    {
      label: 'Player Experience',
      screenshots: [
        { image: '/screenshots/basic-game-platform/player/home.png', caption: 'Home — game selector letting a player switch between titles they have access to before entering the player dashboard.' },
        { image: '/screenshots/basic-game-platform/player/redeem-code.png', caption: 'Redeem Code — per-game code redemption form for claiming promotional or gift rewards.' },
        { image: '/screenshots/basic-game-platform/player/shop.png', caption: 'Shop — per-game item storefront with gem packs and bundles across Google Play and App Store pricing tiers.' },
        { image: '/screenshots/basic-game-platform/player/leaderboard.png', caption: 'Leaderboard — per-game ranking view with a board selector and rank/player/score columns.' },
        { image: '/screenshots/basic-game-platform/player/my-purchases.png', caption: 'My Purchases — purchase history with item, quantity, amount, status, and receipt ID.' },
        { image: '/screenshots/basic-game-platform/player/support.png', caption: 'Support — per-game player support tickets with open/solved status tracking.' },
      ],
    },
  ],
},
  {
  slug: 'game-map-creator',
  title: 'Game Map Creator',
  blurb: 'A grid-based map creation tool for game developers.',
  description: 'A grid-based map creation tool for game developers. Features a block palette, file manager organizing exported maps by game folder, and a select tool with fill, erase, and deselect functionality.',
  category: 'tools',
  image: '/screenshots/game-map-creator/Default.png',
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
  image: '/screenshots/tetris/tetris.png',
  github: 'https://github.com/yjk82693',
  status: 'complete',
  evolvedInto: 'tetrisaga',
  screenshots: [
    { image: '/screenshots/tetris/tetris.png', caption: 'Classic Tetris — block rotation, line clearing, and increasing difficulty built with Pygame.' },
  ],
},
{
  slug: 'snake-game',
  title: 'Snake Game',
  blurb: 'A modern twist on the classic Snake game.',
  description: 'A modern twist on the classic Snake game, where players navigate a growing snake to eat food while avoiding collisions.',
  category: 'game',
  image: '/screenshots/snake-game/snake.png',
  github: 'https://github.com/yjk82693',
  status: 'complete',
  screenshots: [
    { image: '/screenshots/snake-game/snake.png', caption: 'Snake Game — navigate a growing snake to eat food while avoiding collisions.' },
  ],
},
{
  slug: 'orcas-rush',
  title: "Orca's Rush",
  blurb: "A Flappy Bird-inspired underwater obstacle game.",
  description: "A Flappy Bird-inspired game with an orca navigating underwater obstacles while collecting points.",
  category: 'game',
  image: '/screenshots/orcas-rush/orca.png',
  github: 'https://github.com/yjk82693',
  status: 'complete',
  screenshots: [
    { image: '/screenshots/orcas-rush/orca.png', caption: "Orca's Rush — an orca navigating underwater obstacles while collecting points." },
  ],
},
{
  slug: 'portfolio-v1',
  title: 'Portfolio v1',
  blurb: 'My first personal portfolio — a React multi-page site with a life story section.',
  description: 'My first personal portfolio built with React. Featured a hand-drawn "Story of My Life" phase gallery, a projects section with Pygame games, and an About Me page. Built in 2024.',
  category: 'frontend',
  image: '/screenshots/portfolio-v1/Default.png',
  github: 'https://github.com/yjk82693/portfolio',
  demo: 'https://portfolio-18fp5bi9q-yoojun-kims-projects.vercel.app/',
  status: 'complete' as const,
  evolvedInto: 'portfolio-v2',
  screenshots: [
    { image: '/screenshots/portfolio-v1/Default.png', caption: 'Home — hero section with YOOJ-BUS logo and intro paragraph.' },
    { image: '/screenshots/portfolio-v1/Phases.png', caption: 'About Me — Story of My Life phase cards with hand-drawn illustrations.' },
    { image: '/screenshots/portfolio-v1/ProjectCard.png', caption: 'Projects — Tetris, Snake Game, and Orca\'s Rush with GitHub links.' },
    { image: '/screenshots/portfolio-v1/ResumeOverleaf.png', caption: 'Resume — simple one-click resume viewer page.' },
  ],
},
{
  slug: 'portfolio-v2',
  title: 'Portfolio v2 — AI Estate',
  blurb: 'This portfolio — a butler-guided estate with Sharvis, an AI concierge.',
  description: 'A complete redesign of my personal portfolio as a butler-guided estate. Features Sharvis, a JARVIS-style AI shark concierge built on Claude, grounded navigation tools, session-depth persona shifts, and a white/blue + black/gold dual theme across four spaces: Welcome, The Estate, The Gallery, and The Report.',
  category: 'frontend',
  image: '/butler/smile.png',
  github: 'https://github.com/yjk82693/AIPortfolio',
  status: 'in-progress' as const,
  evolvedFrom: 'portfolio-v1',
},
{
  slug: 'gdd-template-maker',
  title: 'GDD Template Maker',
  blurb: 'A structured editor for writing Game Design Documents.',
  description: 'A structured editor for writing Game Design Documents, built to keep every project\'s GDD in a consistent, exportable format instead of a loose doc or slide deck. Features a fixed template (Prospectus, UI, Characters, System & Mechanism, Future Updates), custom escape-hatch sections for project-specific content, repeatable entry cards, a technical-drawing-styled document preview, and in-browser PDF export — all with a local, backend-free project manager.',
  category: 'tools',
  image: '/screenshots/gdd-template-maker/EditGdd.png',
  github: 'https://github.com/yjk82693/GDDGenerator/tree/main/src',
  status: 'complete',
  screenshots: [
    { image: '/screenshots/gdd-template-maker/FileTracking.png', caption: 'Document manager — create, open, and track saved GDDs, all stored locally in the browser with no backend.' },
    { image: '/screenshots/gdd-template-maker/EditGdd.png', caption: 'Editor — structured sections (Prospectus, UI, Characters, System, Custom, Future) with a fixed template and sidebar navigation.' },
    { image: '/screenshots/gdd-template-maker/Preview.png', caption: 'Document preview — technical-drawing-styled export with a title block, draft stamp, and margin-numbered sections, ready for PDF export.' },
  ],
},
]
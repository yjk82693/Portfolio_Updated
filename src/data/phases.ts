export type Phase = {
  id: string
  number: number
  title: string
  subtitle: string
  image?: string
  content: string[]
}

export const phases: Phase[] = [
  {
    id: 'elementary',
    number: 1,
    title: 'Elementary Years',
    subtitle: 'Setting a goal of being in the US',
    content: [
      'Growing up, I was like the proverbial frog in the well, believing my small neighborhood in Seoul was the whole world...',
    ],
  },
  {
    id: 'highschool',
    number: 2,
    title: 'High School Life',
    subtitle: 'Finding my dream',
    content: [
      'Placeholder — paste your updated high school story here.',
    ],
  },
  {
    id: 'university-army',
    number: 3,
    title: 'University & Army',
    subtitle: 'Becoming a programmer, serving my country',
    content: [
      'Placeholder — blend your university programming journey with your Army experience.',
    ],
  },
  {
    id: 'looking-ahead',
    number: 4,
    title: 'Looking Ahead',
    subtitle: 'Preparing for graduation and what comes next',
    content: [
      'Placeholder — graduation prep, internship search, long-term vision.',
    ],
  },
]
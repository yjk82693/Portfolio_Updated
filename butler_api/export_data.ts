import { butlerFacts } from '../src/data/butlerFacts'
import { elevatorPitch } from '../src/data/elevatorPitch'
import { projects } from '../src/data/projects'
import { phases } from '../src/data/phases'

console.log(JSON.stringify({ facts: butlerFacts, pitch: elevatorPitch, projects, phases }))

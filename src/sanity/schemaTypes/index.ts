import { type SchemaTypeDefinition } from 'sanity';

import projects from '../schemas/projects';
import skills from '../schemas/skills';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, projects],
}

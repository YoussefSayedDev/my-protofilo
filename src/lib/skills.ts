import { client } from "@/sanity/lib/client";
import { Skill, SkillCategory } from "@/types/interfaces";

export async function getSkills(category: SkillCategory) {
  const query = `
    *[_type == 'skills'] {
      _id,
      label,
      value,
      category
    }
  `;

  const data = await client.fetch(query);

  //  Filter by category
  const finalData = data.filter(
    (d: (typeof data)[0]) => d.category === category && d
  );

  return finalData as Skill[];
}

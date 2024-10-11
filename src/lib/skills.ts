import { client } from "@/sanity/lib/client";
import { Skill, SkillCategory } from "@/types/interfaces";

export async function getSkills(category: SkillCategory) {
  const query = `
    *[_type == 'skills' && category=='${category}'] {
      _id,
      label,
      value,
      category
    }
  `;

  const data = await client.fetch(query);
  console.log("data skills", data);

  return data as Skill[];
}

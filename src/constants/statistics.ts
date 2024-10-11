import { Statistics } from "@/types/interfaces";

export function getStatistics() {
  const statistics: Statistics[] = [
    {
      label: "Years experience",
      value: new Date().getFullYear() - 2023,
    },
    {
      label: "Completed projects",
      value: 4,
    }
  ];
  return { statistics };
}
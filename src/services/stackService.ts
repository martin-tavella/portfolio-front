import api from "@/app/config/axiosConfig";
import { Technology } from "@/components/skills-section/SkillsSection";

const getTechnologies = async () => {
  try {
    const response = await api.get("/stack");

    return response.data.sort((a: Technology, b: Technology) => a.order - b.order)
  } catch (err) {
    console.log(err);
  }
};

export default getTechnologies;

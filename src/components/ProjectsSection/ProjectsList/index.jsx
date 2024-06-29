import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../data/projects.js";

export const ProjectsList = () => {
    return (
        <ul className="list">
            {projects.map((project) => (
                <ProjectCard key={project.name} name={project.name} description={project.description} />
            ))}
        </ul>
    )
};

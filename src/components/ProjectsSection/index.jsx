import { ProjectsList } from "./ProjectsList"
import styles from "./style.module.css"

export const ProjectsSection = () => {
    return (
        <section id="projectsSection" className={`${styles.projectSection} container-content`}>
            <h2 className="title md">Projetos</h2>
            <ProjectsList />
        </section>
    )
}
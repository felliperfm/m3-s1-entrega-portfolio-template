import { TechList } from "./TechList"
import styles from "./style.module.css"

export const TechSection = () => {
    return (
        <section id="techSection" className={`${styles.techSection} container-content`}>
            <h2 className="title md">Tecnologias</h2>
            <TechList />
        </section>
    )
}
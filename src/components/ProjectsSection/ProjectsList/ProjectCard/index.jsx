import styles from "./style.module.css";
import gitIcon from "../../../../assets/git-icon.png";

export const ProjectCard = ({ name, description }) => {
    return (
        <li className={`${styles.projectCard} card project`}>
            <div className={styles.cardContent}>
                <div>
                    <h3 className={`${styles.cardTitle} title sm`}>{name}</h3>
                    <p className="paragraph">{description}</p>
                </div>
                <a href="#" className="link">Saiba mais</a>
            </div>
            <img src={gitIcon} alt="Ícone do Git" />
        </li>
    )
};

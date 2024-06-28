import styles from "./style.module.css"

export const TechCard = ({ image, name }) => {
    return (
        <li className={`${styles.techCard} card tech`}>
            <img src={image} alt={`{name} icon`}></img>
            <h3 className="title sm">{name}</h3>
        </li>
    )
}
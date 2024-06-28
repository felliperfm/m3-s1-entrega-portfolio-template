import { username } from "../../data/user.js"
import bannerImage from "../../assets/banner-img.png"
import styles from "./styles.module.css"

export const BannerSection = () => {
    return (
        <section className={`${styles.bannerSection} container-content`}>
            <div className={styles.bannerText}>
                <div>
                    <p className={`${styles.titleLabel} label`}>{username}</p>
                    <h1 className="title lg">Bem vindo ao meu portólio</h1>
                </div>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <a href="#aboutMeSection" className="btn">Saiba mais</a>
            </div>
            <img src={bannerImage} alt="Ilustração de desenvolvimento web" />
        </section>
    )
}
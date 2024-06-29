import portfolioLogo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header>
            <div className={`${styles.header} container-layout`}>
                <img src={portfolioLogo} alt="Logo Portfólio" />
                <nav>
                    <ul className={styles.menu}>
                        <li><a href="#aboutMeSection" className="link">Sobre</a></li>
                        <li><a href="#techSection" className="link">Stack</a></li>
                        <li><a href="#projectsSection" className="link">Projetos</a></li>
                    </ul>
                </nav>
                <button className="btn">Contato</button>
            </div>
        </header>
    )
};
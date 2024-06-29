import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";
import { user } from "../../data/user.js";
import styles from "./style.module.css";

export const Footer = () => {
    return (
        <footer className="container-layout">
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <h2 className="title md">Contato</h2>
                    <div className={styles.footerIcons}>
                        <img src={whatsappIcon} alt="Ícone do WhatsApp" />
                        <img src={linkedinIcon} alt="Ícone do LinkedIn" />
                        <img src={githubIcon} alt="Ícone do GitHub" />
                    </div>
                </div>
                <p>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
};

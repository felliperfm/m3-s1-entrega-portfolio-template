import { AboutMeSection } from "../components/AboutMeSection";
import { BannerSection } from "../components/BannerSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { TechSection } from "../components/TechSection";
import { PageTemplate } from "./PageTemplate";

export const HomePage = () => {
    return (
        <PageTemplate>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <ProjectsSection />
        </PageTemplate>
    )
};

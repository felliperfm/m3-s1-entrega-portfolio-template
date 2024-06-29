import { TechCard } from "./TechCard";
import { technologies } from "../../../data/technologies";

export const TechList = () => {
    return (
        <ul className="list">
            {technologies.map((technology) => (
                <TechCard key={technology.name} image={technology.img} name={technology.name} />
            ))}
        </ul>
    )
};

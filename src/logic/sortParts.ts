import type { Part } from "src/types/Part";
import estimateLifespan from "./estimateLifespan";
const sortParts = (a: Part, b: Part) => {
    const maxMatchesA = estimateLifespan(a);
    const maxMatchesB = estimateLifespan(b);

    // @ts-ignore TypeScript doesn't like it when you subtract booleans because it sounds weird, but it was actually useful in this case.
    if (b.severeDamage !== a.severeDamage) return b.severeDamage-a.severeDamage;
    return b.matchCount/maxMatchesB-a.matchCount/maxMatchesA;
};
export default sortParts;
import type { Part } from "src/types/Part";
const sortParts = (a: Part, b: Part) => {
    // @ts-ignore TypeScript doesn't like it when you subtract booleans because it sounds weird, but it was actually useful in this case.
    if (b.severeDamage !== a.severeDamage) return b.severeDamage-a.severeDamage;
    return b.matchCount/b.maxMatches-a.matchCount/a.maxMatches;
};
export default sortParts;
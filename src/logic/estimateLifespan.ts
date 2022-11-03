import type { Part } from "src/types/Part";

export default function estimateLifespan(part: Part) {
    const historicalLifeSpan = part.historicalLifespan;
    let total = 0;
    const replacementCount = Object.keys(historicalLifeSpan).length;
    for(let replacement in historicalLifeSpan)
    {
        const curr = historicalLifeSpan[replacement];
        total = total +curr;
    }
    return Math.floor(total/replacementCount);
}
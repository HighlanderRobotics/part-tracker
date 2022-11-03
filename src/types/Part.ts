export type Part = {
    name: string;
    severeDamage: boolean;
    matchCount: number;
    historicalLifespan: {
        originalEstimate: number;
        [key: string]: number;
    };
    id?: string;
}
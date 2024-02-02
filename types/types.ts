export interface Pokemon {
    name: string,
    url: string,
}

export interface PokemonDetails {
    name: string,
    weight: number,
    height: number,
    stat: Stats
}

export interface Stats {
    base_stat: number,
    stat: StatDetails
}

interface StatDetails {
    name: string,
    url: string
}
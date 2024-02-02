import Hero from "@/components/Hero";
import PokemonList from "../PokemonList/List";

export default function Homepage() {
    return (
        <div className="bg-gray-100 min-h-dvh">
            <div className="max-w-5xl mx-auto p-5">
                <Hero />
                <PokemonList />
            </div>
        </div>
    )
}

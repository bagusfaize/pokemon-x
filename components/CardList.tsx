import { Pokemon } from "@/types/types";
import { IMG_BASE_URL } from "@/utils/constant";
import Image from "next/image";

interface CardListProps {
    item: Pokemon
}

export default function CardList({
    item
}: CardListProps) {
    const pokemonUrl = item.url;
    const pokemonIndex = pokemonUrl.split('/').slice(-2)[0]

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4  card  bg-white shadow-xl rounded-2xl" key={item.name}>
            <figure>
                <Image 
                    src={`${IMG_BASE_URL}/${pokemonIndex}.png`} 
                    alt={`pokemon-img-${pokemonIndex}`}
                    height={200}
                    width={200}
                />
            </figure>
            <div className="card-body bg-primary rounded-b-2xl p-5">
                <div>
                    <p className="text-sm font-bold text-secondary">{`#${pokemonIndex}`}</p>
                    <h2 className="card-title capitalize">{item.name}</h2>
                </div>
                <div className="card-actions mt-3">
                    <button className="btn btn-sm w-full btn-secondary rounded-full">See Details</button>
                </div>
            </div>
        </div>
    )
}

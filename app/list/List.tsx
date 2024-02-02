import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";
import SearchBox from "@/components/SearchBox";
import { usePagination } from "@/hooks/usePagination";
import { getPokemons } from "@/services/api"
import { Pokemon } from "@/types/types";
import { useQuery } from "@tanstack/react-query"
import { useState } from "react";

export default function PokemonList() {
    const {
        limit,
        offset,
        page,
        handleNext,
        handlePrev
    } = usePagination();

    const { data, isPending } = useQuery({
        queryKey: ['pokemons', limit, offset],
        queryFn: () => getPokemons(limit, offset),
    })

    return (
        <div className="mx-auto">
            <div className="mb-16">
                <SearchBox />
            </div>
            <div className="grid grid-cols-12 gap-7 mx-auto">
                {data?.results?.map((item: Pokemon) => {
                    return (
                        <CardList item={item} key={item.name} />
                    )
                })}
            </div>
            <div className="flex justify-center">
                <Pagination
                    page={page}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            </div>
        </div>
    )
}

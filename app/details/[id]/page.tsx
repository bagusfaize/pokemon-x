'use client'

import Container from "@/components/Container";
import { getPokemonDetails } from "@/services/api";
import { PokemonDetails, Stats } from "@/types/types";
import { IMG_BASE_URL } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaWeightScale } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { TbRuler } from "react-icons/tb";

export default function Details({ params }: { params: { id: number } }) {
  const router = useRouter();
  const { id } = params;
  const { data, isPending } = useQuery({
    queryKey: ['pokemonDetails', id],
    queryFn: () => getPokemonDetails(id),
  })

  const goBack = () => router.push('/')

  console.log('clg data', data);

  return (
    <Container className="py-5">
      <div className="flex gap-2 items-center">
        <button
          onClick={goBack}
          className="btn btn-ghost btn-sm"
        >
          <IoChevronBack />
        </button>
        <h1 className="text-xl font-bold text-gray-800 capitalize">
          {data?.name}
        </h1>
      </div>
      <div className="grid grid-cols-3 py-10">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <Image
            src={`${IMG_BASE_URL}/${id}.png`}
            alt={`pokemon-img-${id}`}
            height={300}
            width={300}
          />
          <div className="flex justify-around bg-secondary p-5 rounded-xl shadow-sm w-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <TbRuler />
                <p className="font-semibold">{data?.height} m</p>
              </div>
              <div>Height</div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FaWeightScale />
                <p className="font-semibold">{data?.weight} kg</p>
              </div>
              <div>Weight</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-16">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            Stats
          </h1>
          <p>Here's the details about pokemon stats.</p>
          <div className="mt-10 flex flex-col gap-7">
            {
              data?.stats?.map((item: Stats) => (
              <div className="grid grid-cols-12" key={item?.stat?.name}>
                <span className="col-span-4 capitalize font-semibold">{item?.stat?.name}</span>
                <span className="col-span-8">
                  <progress className="progress progress-primary w-full h-3" value={item?.base_stat} max="100"></progress>
                </span>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

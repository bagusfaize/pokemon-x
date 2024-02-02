'use client'

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PokemonList from "./list/List";

export default function App() {
  return (
    <Container>
      <Hero />
      <PokemonList />
    </Container>
  );
}

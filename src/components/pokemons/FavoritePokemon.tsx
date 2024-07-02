import type { FavoritePokemon } from "@interfaces/favorites-interfaces";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  return favoritePokemons;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()} fallback={<div>Loading...</div>}>{(poke) => <FavoritePokemonCard pokemon={poke} />}</For>
    </div>
  );
};

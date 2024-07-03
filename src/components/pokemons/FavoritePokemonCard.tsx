import type { FavoritePokemon } from "@interfaces/favorites-interfaces";
import { For, createSignal, type Component, Show } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [visible, setVisible] = createSignal(true);

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as FavoritePokemon[];

    const newFavorite = favorites.filter(f => f.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    setVisible(false)
  };

  return (
    <Show when={visible()} >
    <div class="flex flex-col justify-center items-center">
      <a href={`/pokemons/${pokemon.name}`}>
        <img src={imgSrc} width={96} height={96} alt={pokemon.name} style={`view-transition-name: ${pokemon.name}-image`} />
        <p class="capitalize">
          #{pokemon.id} {pokemon.name}
        </p>
      </a>

      <button onClick={deleteFavorite} class="text-red-400">
        Borrar
      </button>
    </div>
    </Show>
  );
  
};

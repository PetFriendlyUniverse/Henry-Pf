
import Card from "./Card";

function PokemonCards() {


  return (
    <div className="flex flex-wrap">
      {pokemon.map((p) => (
        <Card key={p.name} name={p.name} weight={p.weight} attack={p.attack} />
      ))}
    </div>
  );
}

export default PokemonCards;

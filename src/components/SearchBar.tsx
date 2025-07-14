import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ city, setCity, onSearch }: Props) {
  return (
    <div className="flex sm:flex-rom gap-2 mb-3">
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
        className="px-4 py-2 rounded text-black"
      />
      <Button
        onClick={onSearch}
      >
        Buscar
      </Button>
    </div>
  );
}

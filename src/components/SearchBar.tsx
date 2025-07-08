type Props = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ city, setCity, onSearch }: Props) {
  return (
    <div className="flex flex-col sm:flex-rom gap-2 mb-5">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
        className="px-4 py-2 rounded text-black"
      />
      <button
        onClick={onSearch}
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
      >
        Buscar
      </button>
    </div>
  );
}

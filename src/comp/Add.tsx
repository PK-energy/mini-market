import {  useState } from "react";

interface Product {
  id: number;
  narxi: number;
  ishi: string;
  yulduz: number;
  sharh: number;
  img: string;
}

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Add = ({ products, setProducts }: Props) => {

  const [nom, setNom] = useState("");
  const [narx, setNarx] = useState("");
  const [rasm, setRasm] = useState("");
  const deleteProduct = (id: number) => {
    setProducts(products.filter((item) => item.id !== id));
  };
  const addProducts = () => {
    const yangiMahsulot = {
      id: Date.now(),
      ishi: nom,
      narxi: Number(narx),
      img: rasm,
      yulduz: 5,
      sharh: 0,
    };

    setProducts([...products, yangiMahsulot]);

    setNom("");
    setNarx("");
    setRasm("");
  };
  return (
    <div className="pt-28 px-20">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <input
        type="text"
        placeholder="Mahsulot nomi"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <input
        type="number"
        placeholder="Narxi"
        value={narx}
        onChange={(e) => setNarx(e.target.value)}
      />

      <input
        type="text"
        placeholder="Rasm URL"
        value={rasm}
        onChange={(e) => setRasm(e.target.value)}
      />

      <button onClick={addProducts} type="button">
        Qo'shish
      </button>

      <div className="mt-10 flex flex-col gap-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 rounded-xl"
          >
            <span>{item.ishi}</span>

            <button
              type="button"
              onClick={() => deleteProduct(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;

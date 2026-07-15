interface Props {
  prod: Prod[];
  delet: (id: number) => void;
  back: () => void;
}

interface Prod {
  id: number;
  narxi: number;
  ishi: string;
  yulduz: number;
}

const Savat = ({ prod, delet, back }: Props) => {
  const jami = prod.reduce((sum, item) => sum + item.narxi, 0);

  return (
    <div className="pt-28 px-25 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">🛒 Savat</h1>

        <button
          onClick={back}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl"
        >
          ← Ortga
        </button>
      </div>

      {prod.length === 0 ? (
        <div className="text-center text-3xl mt-40">Savat bo'sh 😕</div>
      ) : (
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-5">
            {prod.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center rounded-3xl border p-5"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.ishi}</h2>

                  <p>{item.narxi.toLocaleString()} so'm</p>
                </div>

                <button
                  onClick={() => delet(item.id)}
                  className="bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>

          <div className="w-96 h-fit border rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-5">Buyurtma</h2>

            <div className="flex flex-col gap-4">
              <input className="border rounded-xl p-3" placeholder="Ism" />

              <input className="border rounded-xl p-3" placeholder="Telefon" />

              <input className="border rounded-xl p-3" placeholder="Shahar" />

              <input className="border rounded-xl p-3" placeholder="Manzil" />
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold">Jami:</h2>

              <p className="text-3xl font-bold text-blue-600">
                {jami.toLocaleString()} so'm
              </p>
            </div>

            <button className="w-full mt-8 py-4 rounded-2xl bg-green-600 text-white text-xl">
              Buyurtma berish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Savat;

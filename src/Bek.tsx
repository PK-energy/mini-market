interface PRops {
  narxi: number;
  ishi: string;
  yulduz: number;
  sharh: number;
  img: string;
  clicked: (id: any) => void;
  id: number;
  fek: string;
}

const Bek = ({ narxi, ishi, yulduz, sharh, img, clicked, id, fek }: PRops) => {
  return (
    <div
      className={`py-3 px-5 flex flex-col items-start justify-end gap-3 w-75 h-110 hover:shadow-2xl transition-all rounded-2xl ${fek}`}
    >
      <p className="opacity-0">{id}</p>
      <div className="flex items-center justify-center pl-3">
        <img
          className="w-full h-60 object-cover hover:h-62 rounded-2xl"
          src={img}
          alt="perk"
        />
      </div>
      <div className="flex flex-col">
        <span>{narxi}</span>
        <p className="w-38 bg-amber-600 rounded-lg p-1">1 912 so'm/oyiga</p>
        <p>{ishi}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span>{yulduz}</span>
          <p>({sharh}sharhlar)</p>
        </div>
        <button
          onClick={() => clicked({ id, narxi, ishi, yulduz, sharh })}
          className="cursor-pointer w-65 bg-blue-700 text-white py-2 rounded-2xl"
        >
          Savatga qoshish
        </button>
      </div>
    </div>
  );
};

export default Bek;

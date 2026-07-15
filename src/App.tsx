import { useEffect, useState } from "react";
import Bek from "./Bek";
import Savat from "./comp/Savat";
import Add from "./comp/Add";
import Login from "./comp/Login";

interface Props {
  id: number;
  narxi: number;
  ishi: string;
  yulduz: number;
}

const App = () => {
  interface Product {
  id: number;
  narxi: number;
  ishi: string;
  yulduz: number;
  sharh: number;
  img: string;
}
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(() => {
  return localStorage.getItem("login") === "true";
});
  const [admin, setAdmin] = useState(false);
  const [cartPage, setCartPage] = useState(false);
  const [perk, SetPerk] = useState(true);
  const [search, setSearch] = useState("");
  const [qosh, SetQosh] = useState<any[]>(() => {
  const savedCart = localStorage.getItem("savat");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("savat", JSON.stringify(qosh));
}, [qosh]);
  useEffect(() => {
    const data = localStorage.getItem("savat");

    if (data) {
      SetQosh(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("savat", JSON.stringify(qosh));
  }, [qosh]);
  const click = (pem: Props) => {
    const bor = qosh.some((item) => item.id === pem.id);

    if (!bor) {
      const yangi = [...qosh, pem];
      SetQosh(yangi);
      console.log(yangi);
    }
  };
  const delet = (id: number) => {
    SetQosh(qosh.filter((item) => item.id !== id));
  };
  const defaultProducts = [
    {
      id: 1,
      narxi: 15999000,
      ishi: "iPhone 16 Pro Max 256GB",
      yulduz: 4.9,
      sharh: 1287,
      img: "https://dummyjson.com/image/300x300?text=iPhone+16",
    },
    {
      id: 2,
      narxi: 13999000,
      ishi: "Samsung Galaxy S25 Ultra",
      yulduz: 4.8,
      sharh: 954,
      img: "https://dummyjson.com/image/300x300?text=Galaxy+S25",
    },
    {
      id: 3,
      narxi: 2299000,
      ishi: "Redmi Note 14 8/256",
      yulduz: 4.7,
      sharh: 643,
      img: "https://dummyjson.com/image/300x300?text=Redmi+Note+14",
    },
    {
      id: 4,
      narxi: 5699000,
      ishi: "POCO X7 Pro 12/512",
      yulduz: 4.8,
      sharh: 512,
      img: "https://dummyjson.com/image/300x300?text=POCO+X7+Pro",
    },
    {
      id: 5,
      narxi: 18499000,
      ishi: "MacBook Air M3 13",
      yulduz: 5.0,
      sharh: 488,
      img: "https://dummyjson.com/image/300x300?text=MacBook+Air",
    },
    {
      id: 6,
      narxi: 7299000,
      ishi: "HP 255 G10 Ryzen 5",
      yulduz: 4.7,
      sharh: 322,
      img: "https://dummyjson.com/image/300x300?text=HP+Laptop",
    },
    {
      id: 7,
      narxi: 7699000,
      ishi: "Lenovo IdeaPad Slim 3",
      yulduz: 4.6,
      sharh: 280,
      img: "https://dummyjson.com/image/300x300?text=Lenovo",
    },
    {
      id: 8,
      narxi: 3199000,
      ishi: "AirPods Pro 2",
      yulduz: 4.9,
      sharh: 1520,
      img: "https://dummyjson.com/image/300x300?text=AirPods",
    },
    {
      id: 9,
      narxi: 1199000,
      ishi: "JBL Flip 6",
      yulduz: 4.8,
      sharh: 706,
      img: "https://dummyjson.com/image/300x300?text=JBL",
    },
    {
      id: 10,
      narxi: 99000,
      ishi: "P9 Bluetooth Quloqchin",
      yulduz: 4.1,
      sharh: 410,
      img: "https://dummyjson.com/image/300x300?text=P9",
    },
    {
      id: 11,
      narxi: 349000,
      ishi: "Logitech G102 Mouse",
      yulduz: 4.7,
      sharh: 633,
      img: "https://dummyjson.com/image/300x300?text=Mouse",
    },
    {
      id: 12,
      narxi: 799000,
      ishi: "Redragon K552 Keyboard",
      yulduz: 4.8,
      sharh: 345,
      img: "https://dummyjson.com/image/300x300?text=Keyboard",
    },
    {
      id: 13,
      narxi: 999000,
      ishi: "Xiaomi Smart Band 9",
      yulduz: 4.6,
      sharh: 591,
      img: "https://dummyjson.com/image/300x300?text=Band+9",
    },
    {
      id: 14,
      narxi: 6599000,
      ishi: "Apple Watch Series 10",
      yulduz: 4.9,
      sharh: 280,
      img: "https://dummyjson.com/image/300x300?text=Watch",
    },
    {
      id: 15,
      narxi: 4899000,
      ishi: "Sony WH-1000XM5",
      yulduz: 4.9,
      sharh: 301,
      img: "https://dummyjson.com/image/300x300?text=Sony",
    },
    {
      id: 16,
      narxi: 8990000,
      ishi: "Canon EOS R50",
      yulduz: 4.8,
      sharh: 164,
      img: "https://dummyjson.com/image/300x300?text=Canon",
    },
    {
      id: 17,
      narxi: 5299000,
      ishi: "GoPro Hero 13",
      yulduz: 4.8,
      sharh: 241,
      img: "https://dummyjson.com/image/300x300?text=GoPro",
    },
    {
      id: 18,
      narxi: 2999000,
      ishi: "LG UltraWide Monitor",
      yulduz: 4.7,
      sharh: 198,
      img: "https://dummyjson.com/image/300x300?text=LG+Monitor",
    },
    {
      id: 19,
      narxi: 8699000,
      ishi: "PlayStation 5 Slim",
      yulduz: 5.0,
      sharh: 1092,
      img: "https://dummyjson.com/image/300x300?text=PS5",
    },
    {
      id: 20,
      narxi: 8299000,
      ishi: "Xbox Series X",
      yulduz: 4.9,
      sharh: 617,
      img: "https://dummyjson.com/image/300x300?text=Xbox",
    },
    {
      id: 21,
      narxi: 699000,
      ishi: "Anker Power Bank 20000mAh",
      yulduz: 4.7,
      sharh: 459,
      img: "https://dummyjson.com/image/300x300?text=PowerBank",
    },
    {
      id: 22,
      narxi: 1299000,
      ishi: "Samsung SSD 1TB",
      yulduz: 4.9,
      sharh: 394,
      img: "https://dummyjson.com/image/300x300?text=SSD",
    },
    {
      id: 23,
      narxi: 159000,
      ishi: "SanDisk 128GB USB",
      yulduz: 4.5,
      sharh: 572,
      img: "https://dummyjson.com/image/300x300?text=USB",
    },
    {
      id: 24,
      narxi: 2199000,
      ishi: "Gaming Stol RGB",
      yulduz: 4.6,
      sharh: 137,
      img: "https://dummyjson.com/image/300x300?text=Desk",
    },
    {
      id: 25,
      narxi: 1899000,
      ishi: "Premium Kompyuter Kreslo",
      yulduz: 4.6,
      sharh: 221,
      img: "https://dummyjson.com/image/300x300?text=Chair",
    },
    {
      id: 26,
      narxi: 5099000,
      ishi: "Huawei MatePad 11",
      yulduz: 4.7,
      sharh: 193,
      img: "https://dummyjson.com/image/300x300?text=MatePad",
    },
    {
      id: 27,
      narxi: 10999000,
      ishi: "iPad Air M3",
      yulduz: 4.9,
      sharh: 411,
      img: "https://dummyjson.com/image/300x300?text=iPad",
    },
    {
      id: 28,
      narxi: 5599000,
      ishi: "Nintendo Switch OLED",
      yulduz: 4.8,
      sharh: 538,
      img: "https://dummyjson.com/image/300x300?text=Nintendo",
    },
    {
      id: 29,
      narxi: 499000,
      ishi: "Xiaomi WiFi Router AX3000",
      yulduz: 4.6,
      sharh: 347,
      img: "https://dummyjson.com/image/300x300?text=Router",
    },
    {
      id: 30,
      narxi: 599000,
      ishi: "TP-Link Archer C64",
      yulduz: 4.7,
      sharh: 291,
      img: "https://dummyjson.com/image/300x300?text=TP-Link",
    },
  ];
  const [products, setProducts] = useState<Product[]>(() => {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : defaultProducts;
});
useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products));
}, [products]);

  return (
    <div
      className={`${perk ? "bg-gray-800 text-white" : "bg-white text-black"} flex flex-col gap-5 min-h-screen`}
    >
      <div
        className={`flex fixed w-full h-18 items-center py-10 px-25 ${perk ? "bg-slate-900" : "bg-slate-400"}`}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => {
              setCartPage(false);
              setAdmin(false);
            }}
            className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
          >
            Z
          </div>
          <div
            onClick={() => setCartPage(false)}
            className="flex flex-col leading-none"
          >
            <h1
              className={`text-2xl font-extrabold ${perk ? "text-gray-200" : "text-gray-700"}`}
            >
              ZonZe
            </h1>
            <span className="text-sm text-gray-500 tracking-widest">
              MARKET
            </span>
          </div>
          <input
            type="text"
            placeholder="Qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-2 w-96 outline-none"
          />
        </div>

        <div className="fixed t-20 right-10 flex flex-col gap-4">
          <div className="flex gap-5">
            <button
              className="text-blue-700 bg-blue-200 hover:bg-blue-300 py-2 px-5 rounded-2xl text-2xl transition-all relative"
              onClick={() => {setCartPage(true);setAdmin(false)}}
            >
              Savat
              {qosh.length > 0 && (
                <span className="absolute -top-2 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
                  {qosh.length}
                </span>
              )}
            </button>
            <button className="text-4xl" onClick={() => SetPerk(!perk)}>
              {perk ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => {
  if (isLogin) {
    setAdmin(!admin);
    setCartPage(false);
  } else {
    setShowLogin(true);
  }
}}
              className="bg-green-600 text-white px-5 py-2 rounded-xl"
            >
              {admin ? "Do'kon" : "Admin"}
            </button>
          </div>
        </div>
      </div>

      {admin ? (
        <Add products={products} setProducts={setProducts} />
      ) : cartPage ? (
        <Savat
          prod={qosh}
          delet={delet}
          back={() => {
            setCartPage(false);
          }}
        />
      ) : (
        <div className="grid grid-cols-5 gap-20 pt-35 py-5 px-25 max-3xl:grid-cols-4">
          {products
            .filter((item:Product) =>
              item.ishi.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item:Product) => (
              <Bek
                key={item.id}
                fek={perk ? "bg-gray-700" : "bg-gray-300"}
                id={item.id}
                clicked={click}
                narxi={item.narxi}
                ishi={item.ishi}
                yulduz={item.yulduz}
                sharh={item.sharh}
                img={item.img}
              />
            ))}
        </div>
      )}
      {isLogin && (
  <button
    onClick={() => {
      localStorage.removeItem("login");
      setIsLogin(false);
      setAdmin(false);
    }}
    className="bg-red-600 text-white px-5 py-2 rounded-xl"
  >
    Logout
  </button>
)}
      {showLogin && (
  <Login
    kirish={() => {
      localStorage.setItem("login", "true");

      setIsLogin(true);
      setAdmin(true);
      setShowLogin(false);
    }}
  />
)}
    </div>
  );
};

export default App;

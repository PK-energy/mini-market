import { useState } from "react";

interface Props {
  kirish: () => void;
}

const Login = ({ kirish }: Props) => {
  const [login, setLogin] = useState("");
  const [parol, setParol] = useState("");
  const [error, setError] = useState("");

  const check = () => {
    if (login === "admin" && parol === "12345") {
      kirish();
    } else {
      setError("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">
      <div className="w-[420px] rounded-3xl bg-gray-200 p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Admin panelga kirish uchun ma'lumotlarni kiriting
        </p>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="border-2 border-gray-500 rounded-xl p-4 outline-none text-black"
          />

          <input
            type="password"
            placeholder="Parol"
            value={parol}
            onChange={(e) => setParol(e.target.value)}
            className="border-2 border-gray-500 rounded-xl p-4 outline-none text-black"
          />

          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          <button
            onClick={check}
            className="bg-blue-700 hover:bg-blue-800 transition text-white py-4 rounded-xl text-xl font-semibold"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
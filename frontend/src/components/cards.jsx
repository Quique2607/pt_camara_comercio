import { useEffect, useState } from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-lg" key={data.id}>
      <div className="w-full h-[100px] bg-gray-300 rounded-t-2xl"></div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{data.nombre}</h1>
        <p className="text-gray-500">{data.tema}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  const [data, setData] = useState([]);
  const [tema, setTema] = useState("");
  const [temas, setTemas] = useState([]);

  const fetchDatos = async () => {
    try {
      const res = await fetch("http://localhost:3320/videos");
      const data = await res.json();
      setData(data);

      const uniqueTemas = [...new Set(data.map((item) => item.tema))];
      setTemas(uniqueTemas);
    } catch (error) {
      console.error("Error en el servidor", error);
    }
  };

  useEffect(() => {
    fetchDatos();
  }, []);

  const filteredData = tema ? data.filter((item) => item.tema === tema) : data;

  return (
    <div className="w-[80%] mx-auto mt-10 bg-white rounded-2xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl">Nuestros Cursos</h1>

        <select
          className="p-3 pl-4 pr-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
        >
          <option value="">Todos los temas</option>
          {temas.map((temaOption, index) => (
            <option key={index} value={temaOption}>
              {temaOption}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {filteredData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

import { useEffect, useState } from "react";

const List = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const res = await fetch("http://localhost:3320/navegacion");
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error("Error en el servidor", error);
        }
    }

    useEffect(()=>{
        fetchItems();
    },[])
    return (
        <>
            <ul className="bg-white p-3 w-[80%] mx-auto mt-10 rounded-2xl">
                {
                    items.map((item)=>(
                        <li key={item.id}>
                            <div className="mt-2">
                                <h2 className="text-red-500">{item.id}</h2>
                                <p>{item.url}</p>
                                <p>{item.agente}</p>
                                <p>{item.hora_web}</p>
                                <p>{item.hora_video}</p>
                            </div>
                        </li>
                    ))
                }
            
            </ul>
        </>
    );
}

export default List;
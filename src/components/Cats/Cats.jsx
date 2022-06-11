import { useState, useEffect } from "react";
import CatList from "./CatList";

const Cats = () => {
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=beng`;

    const [cat, setCat] = useState({
        name: "",
        url: "",
        origin: "",
        description: "",
        id: "",
    });

    const [cats, setCats] = useState([]);

    const getCats = async () => {
        await fetch("https://api.thecatapi.com/v1/breeds")
            .then((res) => res.json())
            .then((res) => {
                res.map((data) => {
                    const { name, id } = data;
                    const gatos = {
                        name,
                        id,
                    };
                    setCats(cats.push(gatos));
                });
                console.log(cats);
                console.log(typeof cats);
            });
    };

    const message = "click to get a cat";

    const changeCat = async () => {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const { url, breeds } = data[0];
                const { name, origin, description, id } = breeds[0];

                const gato = {
                    name,
                    url,
                    origin,
                    description,
                    id,
                };
                setCat({ ...cat, ...gato });
            });
    };

    return (
        <div className="content-center my-0 mx-auto p-6 max-w-xl">
            <button
                className="text-md px-3 py-1 bg-fuchsia-300 hover:bg-fuchsia-600 ease-in-out duration-300 hover:text-white text-black rounded-md my-4 max-w-sm"
                onClick={changeCat}
            >
                Get a random cat
            </button>

            <button
                className="text-md px-3 py-1 bg-slate-300 hover:bg-slate-600 ease-in-out duration-300 hover:text-white text-black rounded-md my-4 max-w-sm ml-5"
                onClick={getCats}
            >
                Get Cats
            </button>
            <p>{cats === [] ? "" : `The cat name is ${cats.name}`}</p>

            <p className="text-5xl text-center">
                {cat.name === "" ? message : ""}
            </p>
            <p className="mb-4 text-6xl text-center">{cat.name}</p>
            <p className="mb-4">
                {cat.description === ""
                    ? ""
                    : `This cat has his origin in ${cat.origin}`}
            </p>
            <p className="mb-4 text-xl">{cat.description}</p>
            <img src={cat.url} alt={cat.id} />
        </div>
    );
};

export default Cats;

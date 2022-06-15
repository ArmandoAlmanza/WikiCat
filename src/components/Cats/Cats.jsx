import { useState } from "react";
import CatList from "./CatList";
import { CatText } from "./CatText";

const Cats = () => {
    const [currentCat, setCurrentCat] = useState("beng");

    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${currentCat}`;

    const [cat, setCat] = useState({
        name: "",
        url: "",
        origin: "",
        description: "",
        id: "",
    });

    const [cats, setCats] = useState([]);

    const getCats = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.error(err));
    };

    const message = "Select a cat and click the button to get the info";

    const changeCat = async () => {
        getCats()
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const { url, breeds } = data[0];
                const { name, origin, description, id } = breeds[0];

                const newCat = {
                    name,
                    url,
                    origin,
                    description,
                    id,
                };
                setCat({ ...cat, ...newCat });
            });
    };

    return (
        <div className="content-center my-0 mx-auto p-6 max-w-xl container">
            <CatList onCatChange={(cat) => setCurrentCat(cat)} />
            <button
                className="text-md px-3 py-1 bg-fuchsia-300 hover:bg-fuchsia-600 ease-in-out duration-300 hover:text-white text-black rounded-md mb-6 max-w-sm block mx-auto"
                onClick={changeCat}
            >
                Get the cat info
            </button>
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

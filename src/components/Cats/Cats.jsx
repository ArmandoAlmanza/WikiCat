import { useState } from "react";
import CatList from "./CatList";
import CatProperty from "./CatProperty";

const Cats = () => {
    const [currentCat, setCurrentCat] = useState("beng");

    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${currentCat}`;

    const [cat, setCat] = useState({
        name: "",
        url: "",
        origin: "",
        description: "",
        id: "",
        adaptability: 0,
        affection_level: 0,
        dog_friendly: 0,
        energy_level: 0,
        social_needs: 0,
    });

    const message = "Select a cat and click the button to get the info";

    const changeCat = async () => {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const { url, breeds } = data[0];
                const {
                    name,
                    origin,
                    description,
                    id,
                    adaptability,
                    affection_level,
                    dog_friendly,
                    energy_level,
                    social_needs,
                } = breeds[0];

                const newCat = {
                    name,
                    url,
                    origin,
                    description,
                    id,
                    adaptability,
                    affection_level,
                    dog_friendly,
                    energy_level,
                    social_needs,
                };
                setCat({ ...cat, ...newCat });
            });
    };

    return (
        <div className="content-center my-0 mx-auto p-6 max-w-xl container">
            <CatList onCatChange={(cat) => setCurrentCat(cat)} />
            <button
                className="text-md px-4 py-2 bg-[#CAB8FF]  hover:bg-[#E1CCEC] ease-in-out duration-300 text-black rounded-md mb-6 max-w-sm block mx-auto mt-7"
                onClick={changeCat}
            >
                Get the cat info
            </button>
            <p className="text-5xl text-center">
                {cat.name === "" ? message : ""}
            </p>
            <p className="mb-4 text-6xl text-center">{cat.name}</p>
            <p className="mb-4 text-center text-xl">
                {cat.description === ""
                    ? ""
                    : `This cat has his origin in ${cat.origin}`}
            </p>
            <p className="mb-4 text-2xl">{cat.description}</p>
            <img src={cat.url} alt={cat.id} className="mb-4 rounded-2xl" />
            {cat.description === "" ? (
                ""
            ) : (
                <div>
                    {/* <CatProperty
                        propertyLevel={cat.adaptability}
                        messageHigh="very adaptive to new places."
                        messageLow="not very adaptable to new places."
                    />

                    <CatProperty
                        propertyLevel={cat.affection_level}
                        messageHigh="not so sweetie."
                        messageLow="very sweet, he is a cupcake 🧁."
                    />
                    <CatProperty
                        propertyLevel={cat.social_needs}
                        messageHigh="not very sotiable."
                        messageLow="very sotiable."
                    />
                    <CatProperty
                        propertyLevel={cat.dog_friendly}
                        messageHigh="not very polite with dogs."
                        messageLow="very friendly with dogs."
                    />
                    <CatProperty
                        propertyLevel={cat.energy_level}
                        messageHigh="his very loose, are you sure is not garfield?."
                        messageLow="he is hyperactive, don't give him coffee."
                    /> */}
                    <p className="mb-4 text-xl">
                        This cat is{" "}
                        {cat.adaptability <= 3
                            ? "not very adaptable to new places."
                            : "very adaptive to new places."}{" "}
                        <span className="text-purple-600">
                            His adaptability level is: {cat.adaptability}
                        </span>
                    </p>
                    <p className="mb-4 text-xl">
                        This cat is{" "}
                        {cat.affection_level <= 3
                            ? "not so sweetie."
                            : "very sweet, he is a cupcake 🧁."}{" "}
                        <span className="text-purple-600">
                            His affection level is: {cat.affection_level}
                        </span>
                    </p>
                    <p className="mb-4 text-xl">
                        This cat is{" "}
                        {cat.dog_friendly <= 3
                            ? "not very polite with dogs."
                            : "very friendly with dogs."}{" "}
                        <span className="text-purple-600">
                            His dog friendly level is: {cat.dog_friendly}
                        </span>
                    </p>
                    <p className="mb-4 text-xl">
                        This cat is{" "}
                        {cat.energy_level <= 3
                            ? "his very loose, are you sure is not garfield?."
                            : "he is hyperactive, don't give him coffee."}{" "}
                        <span className="text-purple-600">
                            His energy level is: {cat.energy_level}
                        </span>
                    </p>
                    <p className="mb-4 text-xl">
                        This cat is{" "}
                        {cat.social_needs <= 3
                            ? "not very sotiable."
                            : "very sotiable."}{" "}
                        <span className="text-purple-600">
                            His social level is: {cat.social_needs}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cats;

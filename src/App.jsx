import { useState } from "react";
import Tips from "./components/MainPage/Tips";

function App() {
    const [cat, setCat] = useState("");

    const getCat = async () => {
        await fetch("https://api.thecatapi.com/v1/images/search")
            .then((data) => data.json())
            .then((res) => {
                const { url } = res[0];
                setCat(url);
            })
            .catch((err) =>
                console.error(`Hubo un error con la petición ${err}`)
            );
    };

    return (
        <main>
            <section className="p-4 bg-[#8FBDD3] rounded-tl-2xl rounded-br-2xl text-black mt-5 md:mx-5">
                <h1 className="text-center text-6xl mb-2">
                    Welcome to{" "}
                    <span>
                        Wiki<span>Cat</span>
                    </span>
                </h1>
                <p className="text-center mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde alias consequuntur maxime ex nostrum sunt iusto
                    perspiciatis doloremque consectetur odio impedit temporibus
                    voluptate rerum necessitatibus quis omnis eos, porro sit.
                    Odio asperiores excepturi voluptas veniam ex illo, fugiat,
                    laboriosam ullam dignissimos sint et porro, magni sunt
                    voluptatem ducimus quia. Iusto sint neque dolores delectus,
                    praesentium nam soluta ipsa omnis necessitatibus. Unde nisi
                    beatae voluptates voluptas, quisquam porro incidunt odit
                    possimus sint quae. Facere impedit, commodi consequatur illo
                    quaerat placeat tenetur ad eligendi ipsam consequuntur quod,
                    est dolore et mollitia in?
                </p>
                <button
                    className="text-md px-4 py-2 bg-[#F0D9FF]  hover:bg-[#CAB8FF] ease-in-out duration-300 text-black rounded-md mb-6 max-w-sm block mx-auto mt-7"
                    onClick={getCat}
                >
                    Get a random cat picture
                </button>
                <img
                    className="my-3 mx-auto md:h-96 rounded-2xl h-auto"
                    src={
                        cat ||
                        "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                    }
                    alt="random cat"
                />
            </section>
            <Tips />
        </main>
    );
}

export default App;

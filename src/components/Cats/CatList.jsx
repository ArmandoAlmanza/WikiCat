const CatList = ({ onCatChange }) => {
    let cats = [
        { name: "Abyssinian", id: "abys" },
        { name: "Aegean", id: "aege" },
        { name: "American Bobtail", id: "abob" },
        { name: "American Curl", id: "acur" },
        { name: "American Shorthair", id: "asho" },
        { name: "American Wirehair", id: "awir" },
        { name: "Arabian Mau", id: "amau" },
        { name: "Australian Mist", id: "amis" },
        { name: "Balinese", id: "bali" },
        { name: "Bambino", id: "bamb" },
        { name: "Bengal", id: "beng" },
        { name: "Birman", id: "birm" },
        { name: "Bombay", id: "bomb" },
        { name: "British Longhair", id: "bslo" },
        { name: "British Shorthair", id: "bsho" },
        { name: "Burmese", id: "bure" },
        { name: "Burmilla", id: "buri" },
        { name: "California Spangled", id: "cspa" },
        { name: "Chantilly-Tiffany", id: "ctif" },
        { name: "Chartreux", id: "char" },
        { name: "Chausie", id: "chau" },
        { name: "Cheetoh", id: "chee" },
        { name: "Colorpoint Shorthair", id: "csho" },
        { name: "Cornish Rex", id: "crex" },
        { name: "Cymric", id: "cymr" },
        { name: "Cyprus", id: "cypr" },
        { name: "Devon Rex", id: "drex" },
        { name: "Donskoy", id: "dons" },
        { name: "Dragon Li", id: "lihu" },
        { name: "Egyptian Mau", id: "emau" },
        { name: "European Burmese", id: "ebur" },
        { name: "Exotic Shorthair", id: "esho" },
        { name: "Havana Brown", id: "hbro" },
        { name: "Himalayan", id: "hima" },
        { name: "Japanese Bobtail", id: "jbob" },
        { name: "Javanese", id: "java" },
        { name: "Khao Manee", id: "khao" },
        { name: "Korat", id: "kora" },
        { name: "Kurilian", id: "kuri" },
        { name: "LaPerm", id: "lape" },
        { name: "Maine Coon", id: "mcoo" },
        { name: "Malayan", id: "mala" },
        { name: "Manx", id: "manx" },
        { name: "Munchkin", id: "munc" },
        { name: "Nebelung", id: "nebe" },
        { name: "Norwegian Forest Cat", id: "norw" },
        { name: "Ocicat", id: "ocic" },
        { name: "Oriental", id: "orie" },
        { name: "Persian", id: "pers" },
        { name: "Pixie-bob", id: "pixi" },
        { name: "Ragamuffin", id: "raga" },
        { name: "Ragdoll", id: "ragd" },
        { name: "Russian Blue", id: "rblu" },
        { name: "Savannah", id: "sava" },
        { name: "Scottish Fold", id: "sfol" },
        { name: "Selkirk Rex", id: "srex" },
        { name: "Siamese", id: "siam" },
        { name: "Siberian", id: "sibe" },
        { name: "Singapura", id: "sing" },
        { name: "Snowshoe", id: "snow" },
        { name: "Somali", id: "soma" },
        { name: "Sphynx", id: "sphy" },
        { name: "Tonkinese", id: "tonk" },
        { name: "Toyger", id: "toyg" },
        { name: "Turkish Angora", id: "tang" },
        { name: "Turkish Van", id: "tvan" },
        { name: "York Chocolate", id: "ycho" },
    ];

    return (
        <div className="my-3">
            <label htmlFor="cats" className="mr-3 text-xl">
                {" "}
                Our cats selections{" "}
            </label>
            <select
                name="cats"
                className="form-select appearance-none
                mt-2
                block
                w-full
                px-3
                py-2
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                onChange={(e) => onCatChange(e.target.value)}
            >
                {cats.map((element) => (
                    <option value={element.id} key={element.id}>
                        {element.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CatList;

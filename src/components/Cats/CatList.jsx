import { useState } from "react";

const CatList = () => {
    const [cats, setCats] = useState([]);

    const getCats = async () => {
        await fetch("https://api.thecatapi.com/v1/breeds")
            .then((res) => res.json())
            .then((data) => {
                const { name, id } = data;

                const gatos = {
                    name,
                    id,
                };
                setCats(cats.push(gatos));
                console.log(cats);
            });
    };

    return (
        <div>
            <label htmlFor="cats"> Our cats selections </label>
            <select name="cats">
                <option value="beng">Bengal</option>
                <option value="sib">Siberian</option>
            </select>
        </div>
    );
};

export default CatList;

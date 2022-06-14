import { useState } from "react";

const CatList = () => {
    let cats = [];

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
                    cats.push(gatos);
                });
                console.log(cats);
                console.log(typeof cats);
            });
    };
    return (
        <div>
            <label htmlFor="cats"> Our cats selections </label>
            <select name="cats">
                {cats.map((element) => (
                    <option value={element.id}>{element.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CatList;

const CatList = () => {
    const getCats = async () => {
        await fetch("https://api.thecatapi.com/v1/breeds")
            .then((res) => res.json())
            .then((data) => console.log(data));
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

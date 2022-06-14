export const CatText = ({ onCatChange }) => {
    return (
        <div className="flex content-center justify-betweent m-3">
            <label htmlFor="cat" className="text-2xl mr-3">
                Cat:{" "}
            </label>
            <input
                type="text"
                name="cat"
                placeholder="Enter a cat specie"
                onChange={(e) => onCatChange(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all rounded-xl text-md"
            />
        </div>
    );
};

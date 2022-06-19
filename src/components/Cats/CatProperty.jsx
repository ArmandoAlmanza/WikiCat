const CatProperty = ({name, property}) => {
    return (
        <div>
            <p>The cat has this {name} level {property} </p>
			<p>{
				property > 3 ? `Has a very high ${name} level` : ``
			} </p>
        </div>
    );
};

export default CatProperty;

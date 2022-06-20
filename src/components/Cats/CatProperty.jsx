const CatProperty = ({ propertyLevel, messageHigh, messageLow }) => {
    return (
        <div>
            <p className="mb-4 text-xl">
                This cat is {""}
                {propertyLevel <= 3 ? messageLow : messageHigh}{" "}
                <span className="text-purple-600">
                    His affection level is: {propertyLevel}
                </span>
            </p>
        </div>
    );
};

export default CatProperty;

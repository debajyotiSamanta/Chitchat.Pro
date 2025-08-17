const InputField = ({type, placeholder}) => {
    return (
        <div className="input-wrapper">
            <input
                type={type}
                placeholder={placeholder}
                className="input-field"
                required
            />
            {/* <i className="material-symbols-rounded">{icon}</i> */}
        </div>
    );
};

export default InputField;

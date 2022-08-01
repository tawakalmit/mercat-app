import React from "react"

const CustomInput = ({ptext, id, type, placeholder, value, onChange, disabled}) => {
    return(
        <>
        <p className='text-sm text-white sm:text-black'>{ptext}</p>
        <input
        id={id}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-3"
        type={type}
        placeholder={placeholder}
        // value={value}
        onChange={onChange}
        disabled={disabled}
        defaultValue={value}
        />
        </>
    );
}

export default CustomInput
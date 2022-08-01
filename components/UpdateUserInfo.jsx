import React from "react"

const UpdateUserInfo = ({ptext, id, type, placeholder, value, onChange, disabled}) => {
    return(
        <div className="w-10/12 mx-auto mt-10">
            <p className='text-sm text-[#2c3e50] md:text-black'>{ptext}</p>
            <input
            id={id}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type={type}
            placeholder={placeholder}
            // value={value}
            onChange={onChange}
            disabled={disabled}
            defaultValue={value}
            />
        </div>
    );
}

export default UpdateUserInfo
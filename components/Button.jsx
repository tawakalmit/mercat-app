import React from "react";

const Button = ({kelas, label, loading, onClick}) => {
    return(
        <button 
        className={kelas}
        disabled={loading}
        onClick={onClick}
        >{label}
        </button>
    )
}

export default Button
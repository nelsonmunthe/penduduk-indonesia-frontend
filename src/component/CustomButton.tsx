import React from "react";
interface CustomButtonProps {
    text: string ;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    Icon? : React.ElementType;
    type? : "submit"
    customStyle? : string
}

const CustomButton: React.FC<CustomButtonProps> = (
    {
        text, 
        onClick, 
        Icon, 
        type,
        customStyle
    }
) => {
    return(
        <div className={customStyle ? customStyle : `flex flex-row justify-center gap-1 md:gap-2 bg-brown-primary p-1 md:px-3.5 md:py-2.5 text-sm font-semibold text-white shadow-xs items-center hover:cursor-pointer`}>
            {Icon && <Icon  className="text-xs"/>}
            <button 
                type={type}
                onClick={onClick}
                className="text-center text-xs"
            >
                {text}
            </button>
        </div>
    )
}

export default CustomButton;
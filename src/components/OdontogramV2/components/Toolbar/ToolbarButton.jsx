function ToolbarButton({

    icon,

    label,

    active,

    onClick

}){

    return(

        <button

            className={`toolbarButton ${
                active ? "active" : ""
            }`}

            onClick={onClick}

        >

            <span className="toolbarIcon">

                {icon}

            </span>

            <span>

                {label}

            </span>

        </button>

    );

}

export default ToolbarButton;
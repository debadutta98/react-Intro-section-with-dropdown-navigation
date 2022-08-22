const DropDownMenu=(props)=>{
    return (
        <ul className={`${props.className}`}>
            {props.list.map((value,index)=>{
                if("icon" in value)
                {
                    return <li key={index} className="flex items-center px-2">
                        <img src={value.icon} alt={value.item} className="w-5 h-5" />
                        <a href="#!" className={` p-1 before:mr-2 link`}> 
                             {value.item}
                        </a>
                    </li>
                }else{
                    return <li key={index} className="px-2">
                        <a href="#!" className="link">
                            {value.item}
                        </a>
                    </li>
                }
            })}
        </ul>
    );
};
export default DropDownMenu;
import menuicon from "../images/icon-menu.svg";
import menuclose from "../images/icon-close-menu.svg";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
const MobileNav = (props) => {
    const [toggle, setToggleOption] = useState(false);
    const [menu, setToggleMenu] = useState({
        features: false,
        company: false,
    });
    const onOpenMenu = () => {
        setToggleOption(true);
    };
    const onCloseMenu = () => {
        setToggleOption(false);
    };
    const onClickFeaturesMenu = () => {
        setToggleMenu((state) => ({
            ...state,
            features: !state.features
        }));
    };
    const onClickCompanyMenu = () => {
        setToggleMenu((state) => ({
            ...state,
            company: !state.company
        }));
    };
    return <>
        <img src={menuicon} alt="nav menu" className="ml-auto sm-l:inline-block hidden pb-2 cursor-pointer" onClick={onOpenMenu} />

        <div className={`side-menu ${!toggle ? "invisible" : "visible"}`}>
            <img src={menuclose} alt="close menu" className="ml-auto p-2 cursor-pointer" onClick={onCloseMenu} />
            <ul className="flex gap-2 flex-col justify-around">
                <li>
                    <span href="#!" className={`${!menu.features ? "after:content-downarrow" : "after:content-uparrow"} after:align-middle link cursor-pointer`} onClick={onClickFeaturesMenu}>Features </span>
                    <DropDownMenu list={props.dropdownWithIcons} className={`${!menu.features ? "hidden" : "flex"} flex-col pt-3 pl-4 gap-3`} />
                </li>
                <li>
                    <span href="#!" className={`${!menu.company ? "after:content-downarrow" : "after:content-uparrow"} after:align-middle link cursor-pointer`} onClick={onClickCompanyMenu}>Company </span>
                    <DropDownMenu list={props.dropdownWithOutIcons} className={`${!menu.company ? "hidden" : "flex"} flex-col pt-3 pl-4 gap-3`} />
                </li>
                <li>
                    <a href="#!" className="link">Careers</a>
                </li>
                <li>
                    <a href="#!" className="link">About</a>
                </li>
            </ul>
            <ul className="flex gap-3 flex-col items-center mt-3">
                <li>
                    <a href="#!" className="link">Login</a>
                </li>
                <li>
                    <a href="#!" className="nav-button">Register</a>
                </li>
            </ul>
        </div>

    </>;
};
export default MobileNav;
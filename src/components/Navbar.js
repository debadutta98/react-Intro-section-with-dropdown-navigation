import logo from "../images/logo.svg";
import DropDownMenu from "./DropDownMenu";
import MobileNav from "./MobileNav";
function Navbar(){
    const dropdownWithIcons=[
        {
            "icon": require("../images/icon-todo.svg").default,
            "item": "Todo List",
        },
        {
            "icon":require("../images/icon-calendar.svg").default,
            "item":"Calender"
        },
        {
            "icon": require("../images/icon-reminders.svg").default,
            "item":"Reminders"
        },
        {
            "icon":require("../images/icon-planning.svg").default,
            "item":"Planning"
        }
    ];
    const dropdownWithOutIcons=[
            {
                item:"History"
            },
            {
                item:"Our Team"
            },
            {
                item:"Blog"
            }
    ];
    return (
        <nav className="flex p-6 gap-6 md:gap-12 flex-wrap text-sm h-auto items-center text-Medium-Gray">
            <img src={logo} alt="brand logo" className="w-15"/>
            <ul className="flex gap-10 flex-wrap sm-l:hidden">
                <li className="dropdown-menu">
                    <span className="dropdown-link">Features </span>
                    <DropDownMenu list={dropdownWithIcons} className="invisible dropdown-list -ml-12"/>
                </li>
                <li className="dropdown-menu">
                    <span className="dropdown-link">Company </span>
                    <DropDownMenu list={dropdownWithOutIcons} className="invisible dropdown-list"/>
                </li>
                <li className="link">
                    <a href="#!">Careers</a>
                </li>
                <li className="link">
                    <a href="#!">About</a>
                </li>
            </ul>
            <ul className="ml-auto flex gap-10 sm-l:hidden">
                <li className="link">
                    <a href="#!">Login</a>
                </li>
                <li>
                    <a href="#!" className="nav-button">Register</a>
                </li>
            </ul>
            <MobileNav dropdownWithIcons={dropdownWithIcons} dropdownWithOutIcons={dropdownWithOutIcons} />
        </nav>
    );
}
export default Navbar;
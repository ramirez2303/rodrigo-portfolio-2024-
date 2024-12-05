import NavbarItem from "./components/NavbarItem";
import { NavbarContainer } from "./style";
import { BsBook, BsGlobeAmericas, BsHammer, BsMailbox } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

type NavbarProps = {
    isVisible: boolean;
};

const Navbar = ({ isVisible }: NavbarProps) => {
    const navbarItems = [
        { text: "Inicio", link: "#", icon: <HiOutlineHome /> },
        { text: "Conocimientos", link: "#about", icon: <BsBook /> },
        { text: "Proyectos", link: "#about", icon: <BsGlobeAmericas /> },
        { text: "Experiencia", link: "#about", icon: <BsHammer /> },
        { text: "Contacto", link: "#contact", icon: <BsMailbox /> },
    ];

    return (
        <NavbarContainer isVisible={isVisible}>
            {navbarItems.map((item) => (
                <NavbarItem
                    text={item.text}
                    link={item.link}
                    icon={item.icon}
                    isVisible={isVisible}
                />
            ))}
        </NavbarContainer>
    );
};

export default Navbar;

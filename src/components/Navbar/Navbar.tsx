import { useTranslation } from "react-i18next";
import NavbarItem from "./components/NavbarItem";
import { NavbarContainer } from "./style";
import { BsBook, BsGlobeAmericas, BsHammer, BsMailbox } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

type NavbarProps = {
    isVisible: boolean;
};

const Navbar = ({ isVisible }: NavbarProps) => {
    const { t } = useTranslation();
    const navbarItems = [
        { text: t("home"), link: "#home", IconComponent: HiOutlineHome },
        { text: t("aboutMe"), link: "#aboutMe", IconComponent: BsBook },
        {
            text: t("projects"),
            link: "#projects",
            IconComponent: BsGlobeAmericas,
        },
        { text: t("experience"), link: "#experience", IconComponent: BsHammer },
        { text: t("contact"), link: "#contact", IconComponent: BsMailbox },
    ];

    return (
        <NavbarContainer $isVisible={isVisible}>
            {navbarItems.map((item, ix) => (
                <NavbarItem
                    key={`${item.text}-${ix}`}
                    text={item.text}
                    link={item.link}
                    IconComponent={item.IconComponent}
                    isVisible={isVisible}
                />
            ))}
        </NavbarContainer>
    );
};

export default Navbar;

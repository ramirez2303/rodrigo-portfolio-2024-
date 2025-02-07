import rodrigoIMG from "../../../../assets/rodrigoIMG.png";
import { HomeImage, HomeAvatarContainer } from "./style";

const HomeAvatar = () => {
    return (
        <HomeAvatarContainer>
            <HomeImage src={rodrigoIMG} />
        </HomeAvatarContainer>
    );
};

export default HomeAvatar;

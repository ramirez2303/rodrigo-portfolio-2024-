import { CardImage, ExternalIconContainer } from "../../style";
import { FiExternalLink } from "react-icons/fi";

type ProjectImageProps = {
    image: string;
    isSelected: boolean;
};

const ProjectImage = ({ image, isSelected }: ProjectImageProps) => {
    return (
        <CardImage image={image} isSelected={isSelected}>
            <ExternalIconContainer>
                <FiExternalLink color="white" />
            </ExternalIconContainer>
        </CardImage>
    );
};

export default ProjectImage;

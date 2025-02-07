import { Link } from "@chakra-ui/react";
import { CardImage, ExternalIconContainer } from "../../style";
import { FiExternalLink } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";

type ProjectImageProps = {
    image: string;
    links: {
        project: string;
        github: string;
    };
    isSelected: boolean;
};

const ProjectImage = ({ image, links, isSelected }: ProjectImageProps) => {
    return (
        <CardImage $image={image} $isSelected={isSelected}>
            <ExternalIconContainer>
                <Link
                    href={links.project}
                    w="max-content"
                    height="max-content"
                    target="_blank"
                >
                    <FiExternalLink color="white" />
                </Link>
                <Link
                    href={links.github}
                    w="max-content"
                    height="max-content"
                    target="_blank"
                >
                    <VscGithubInverted color="white" />
                </Link>
            </ExternalIconContainer>
        </CardImage>
    );
};

export default ProjectImage;

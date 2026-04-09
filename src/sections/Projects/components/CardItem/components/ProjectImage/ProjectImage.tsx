// import { Link } from "@chakra-ui/react";
import { CardImage } from "../../style";
// import { FiExternalLink } from "react-icons/fi";
// import { VscGithubInverted } from "react-icons/vsc";
import { Fragment } from "react/jsx-runtime";

type ProjectImageProps = {
    image: string;
    links: {
        project: string;
        github?: string;
    };
    isSelected: boolean;
};

const ProjectImage = ({ image, links, isSelected }: ProjectImageProps) => {
    return (
        <CardImage $image={image} $isSelected={isSelected}>
            <Fragment></Fragment>
            {/* <ExternalIconContainer>
                <Link
                    href={links.project}
                    w="max-content"
                    height="max-content"
                    target="_blank"
                >
                    <FiExternalLink color="white" />
                </Link>
                {!!links.github && (
                    <Link
                        href={links.github}
                        w="max-content"
                        height="max-content"
                        target="_blank"
                    >
                        <VscGithubInverted color="white" />
                    </Link>
                )}
            </ExternalIconContainer> */}
        </CardImage>
    );
};

export default ProjectImage;

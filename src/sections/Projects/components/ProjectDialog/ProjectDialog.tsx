import {
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { projectType } from "@/utils/types";
import { Icon, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";

type ProjectDialogProps = {
    children: React.ReactNode;
    project: projectType;
};

const ProjectDialog = ({ children, project }: ProjectDialogProps) => {
    const { t } = useTranslation();
    return (
        <DialogRoot size="sm">
            <DialogBackdrop />
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent w="80%">
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle fontSize="xl">{project.title}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Image src={project.image} alt={project.title} />
                    <Text fontSize="md" fontWeight="regular" marginTop="20px">
                        {t(project.description)}
                    </Text>
                </DialogBody>
                <DialogFooter>
                    <a
                        href={project.links.project}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon as={FiExternalLink} fontSize="25px" />
                    </a>
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon as={VscGithubInverted} fontSize="25px" />
                    </a>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    );
};

export default ProjectDialog;

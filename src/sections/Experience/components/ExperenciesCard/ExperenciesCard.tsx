import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineTitle,
} from "@/components/ui/timeline";
import { Stack, Text } from "@chakra-ui/react";

type ExperenciesCardProps = {
    title: string;
    position: string;
    date: string;
    description: string;
};

const ExperenciesCard = ({
    title,
    position,
    date,
    description,
}: ExperenciesCardProps) => {
    return (
        <TimelineItem colorPalette="white" mb={10}>
            <TimelineConnector
                bgColor="whiteAlpha.800"
                outlineColor="whiteAlpha.500"
            />
            <TimelineContent
                bgColor="whiteAlpha.100"
                borderRadius="md"
                padding="16px"
                boxSizing="border-box"
                position="relative"
                boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            >
                <TimelineTitle as="h4" fontSize="2xl" fontWeight="bold">
                    {title}
                </TimelineTitle>
                <Stack>
                    <Text fontSize="lg" fontWeight="bold">
                        {position}
                    </Text>
                    <Text fontSize="md" fontWeight="medium" mt="-7px">
                        {date}
                    </Text>
                    <Text fontSize="md" fontWeight="medium">
                        {description}
                    </Text>
                </Stack>
            </TimelineContent>
        </TimelineItem>
    );
};

export default ExperenciesCard;

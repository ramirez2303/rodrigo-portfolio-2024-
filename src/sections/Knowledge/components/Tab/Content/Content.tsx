import { ContentType } from "@/utils/types";
import { For, Grid, GridItem, Link, Stack, Tabs } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "./style";

type ContentProps = {
    values: {
        value: string;
        label: string;
        content: ContentType[];
        icon: string;
    };
};

const Content = ({ values }: ContentProps) => {
    return (
        <Fragment>
            <Tabs.Content value={values.value}>
                <ContentContainer>
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        templateRows="repeat(2, 1fr)"
                        rowGap="10"
                        w={["100%", "100%", "100%", "100%"]}
                        h={["100%", "100%", "1</For>00%", "100%"]}
                    >
                        <For each={values.content}>
                            {(item) => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    target="_blank"
                                >
                                    <GridItem
                                        w="100%"
                                        h="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Stack
                                            justifyContent="center"
                                            align="center"
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                style={{ width: "50px" }}
                                            />
                                            {item.name}
                                        </Stack>
                                    </GridItem>
                                </Link>
                            )}
                        </For>
                    </Grid>
                </ContentContainer>
            </Tabs.Content>
        </Fragment>
    );
};

export default Content;

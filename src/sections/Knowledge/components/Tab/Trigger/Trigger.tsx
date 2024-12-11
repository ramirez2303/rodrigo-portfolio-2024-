import { Tabs } from "@chakra-ui/react";
import { Fragment } from "react";

type TriggerProps = {
    values: { value: string; label: string };
};

const Trigger = ({ values }: TriggerProps) => {
    return (
        <Fragment>
            <Tabs.Trigger
                value={values.value}
                color="#f8f0f0"
                fontSize="lg"
                fontWeight="semibold"
            >
                {values.label}
            </Tabs.Trigger>
        </Fragment>
    );
};

export default Trigger;

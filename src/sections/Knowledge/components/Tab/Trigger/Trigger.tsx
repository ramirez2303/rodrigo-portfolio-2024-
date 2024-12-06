import { Tabs } from "@chakra-ui/react";
import React, { Fragment } from "react";

type TriggerProps = {
    values: { value: string; label: string };
};

const Trigger = ({ values }: TriggerProps) => {
    return (
        <Fragment>
            <Tabs.Trigger
                value={values.value}
                _selected={{ bgColor: "#0d1b2a" }}
                bgColor="transparent"
            >
                {values.label}
            </Tabs.Trigger>
        </Fragment>
    );
};

export default Trigger;

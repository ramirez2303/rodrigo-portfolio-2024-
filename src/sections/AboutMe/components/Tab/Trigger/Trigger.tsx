import { Tabs } from "@chakra-ui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

type TriggerProps = {
    values: { value: string; label: string };
};

const Trigger = ({ values }: TriggerProps) => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Tabs.Trigger
                w={["150px", "auto"]}
                value={values.value}
                color="#f8f0f0"
                fontSize={["lg", "xl"]}
                fontWeight="bold"
            >
                {t(values.label)}
            </Tabs.Trigger>
        </Fragment>
    );
};

export default Trigger;

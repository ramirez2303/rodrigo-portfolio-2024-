import { Tooltip } from "@/components/ui/tooltip";
import { CardItemContainer } from "./style";

type CardItemProps = {
    className: string;
    dataGrid: string;
    isSelected: boolean;
    onClick: (card: HTMLDivElement) => void;
};

const CardItem = ({
    className,
    dataGrid,
    isSelected,
    onClick,
}: CardItemProps) => {
    return (
        <Tooltip
            content="Ir a proyecto"
            positioning={{ placement: "right" }}
            openDelay={0}
            closeDelay={100}
            disabled={!isSelected}
        >
            <CardItemContainer
                className={className}
                data-grid={dataGrid}
                isSelected={isSelected}
                onClick={(e) => onClick(e.target as HTMLDivElement)}
            >
                <>{className}</>
            </CardItemContainer>
        </Tooltip>
    );
};

export default CardItem;

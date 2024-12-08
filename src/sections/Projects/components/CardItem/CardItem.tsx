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
        <CardItemContainer
            className={className}
            data-grid={dataGrid}
            isSelected={isSelected}
            onClick={(e) => onClick(e.target as HTMLDivElement)}
        >
            <>{className}</>
        </CardItemContainer>
    );
};

export default CardItem;

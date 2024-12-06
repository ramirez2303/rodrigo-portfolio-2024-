import gsap from "gsap";
import { Flip } from "gsap/all";
import { useEffect, useState } from "react";

const useSelectedCard = () => {
    const [totalCards, settotalCards] = useState<HTMLElement[] | undefined>(
        undefined
    );
    const [activeCard, setActiveCard] = useState<HTMLElement | undefined>(
        undefined
    );
    const [indexSelected, setIndexSelected] = useState(1);

    gsap.registerPlugin(Flip);

    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card");
        settotalCards(cards);
        if (cards.length > 0 && !activeCard) setActiveCard(cards[0]);
    }, [activeCard]);

    const changeGrid = (el: HTMLElement) => {
        if (el === activeCard) return;

        if (!activeCard) {
            setActiveCard(el);
            return;
        }
        const state = Flip.getState(
            totalCards as ArrayLike<string | Element | Window | null>
        );

        activeCard.dataset.grid = el.dataset.grid;
        el.dataset.grid = "img-1";
        setActiveCard(el);

        Flip.from(state, {
            duration: 0.3,
            absolute: true,
            ease: "power1.inOut",
        });
    };

    return { indexSelected, setIndexSelected, changeGrid };
};

export default useSelectedCard;

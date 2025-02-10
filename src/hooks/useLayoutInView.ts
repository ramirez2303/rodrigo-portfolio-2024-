import { useInView } from "react-intersection-observer";

export const useLayoutInView = () => {
    const { ref, inView } = useInView({
        threshold: 0.7,
        initialInView: true,
    });

    return { ref, inView };
};

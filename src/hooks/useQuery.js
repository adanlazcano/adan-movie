import { useLocation } from "react-router-dom";

export const useQuery = (_) => {
    return new URLSearchParams(useLocation().search);
};
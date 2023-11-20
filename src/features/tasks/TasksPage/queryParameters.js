import { useLocation, useHistory } from 'react-router-dom';

export const useQueryParameter = (arg) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(arg);
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        };

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};
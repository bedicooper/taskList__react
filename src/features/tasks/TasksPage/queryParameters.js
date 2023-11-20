import { useLocation, useHistory } from 'react-router-dom';

export const useQueryParameter = (arg) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(arg);
}; 

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

const replaceQueryParameter = (query) => {
if(query.value === undefined) {
searchParams.delete(query.key);
}
else {
    searchParams.set(query.key, query.value);
};

    history.push(`${location.pathname}?${searchParams.toString()}`);
};

return replaceQueryParameter;

};


// export const useReplaceQueryParameter = () => {
//     const history = useHistory();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
// const replaceQueryParameter = (query) => {
//     // query.value ? searchParams.set(query.key, query.value) : searchParams.delete(query.key);

//     query.key ? console.log("defined") : console.log("nie działa");

//     history.push(`${location.pathname}?${searchParams.toString()}`);
// };

// return {replaceQueryParameter};

// };





// export default () => {
    // const query = useQueryParameter(searchQueryParamName);
    // const replaceQueryParameter = useReplaceQueryParameter();
    //
    // const onInputChange = ({target}) => {
    //  replaceQueryParameter({
    //      key: searchParamName,
    //      value: target.value.trim() === "" ? target.value : undefined,
    // });   
//     // }
//     //
//     const history = useHistory();
//     const location = useLocation();
//     const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

//     const onInputChange = ({ target }) => {
//         const searchParams = new URLSearchParams(location.search);

//         if (target.value.trim() === "") {
//             searchParams.delete(searchQueryParamName);
//         } else {
//             searchParams.set(searchQueryParamName, target.value);
//         }

//         history.push(`${location.pathname}?${searchParams.toString()}`);
//     };
// 
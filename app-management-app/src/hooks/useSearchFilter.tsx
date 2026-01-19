import { useState } from "react";

// custom hook for filter search by a string using starts with
export function useSearchFilter(items: any[], key: string) {
    // useSate to allows us to track state in a component
    // contains the current state and a function that updates the state
    const [search, setSearch ] = useState<string>("");

    /**Filtering the string by a key that allows this to be reusable depending on what we want
     to search **/
    const filteredText = items.filter(item =>
        item[key].toLowerCase().startsWith(search.toLowerCase())
    );
    
    return { search, setSearch, filteredText};
}
import { createContext } from "react";

const Context = createContext<{
    type: string;
    setType: (type: string) => void;
}>({
    type: "",
    setType: () => {}
});

export default Context;

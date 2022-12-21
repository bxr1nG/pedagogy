import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Context from "context";

import Header from "./Header";
import Home from "./Home";
import Methods from "./Methods";
import Receptions from "./Receptions";
import Technologies from "./Technologies";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    const [type, setType] = useState("text");

    return (
        <Context.Provider value={{ type, setType }}>
            <Routes>
                <Route
                    path="/"
                    element={<Header />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="methods"
                        element={<Methods />}
                    />
                    <Route
                        path="receptions"
                        element={<Receptions />}
                    />
                    <Route
                        path="technologies"
                        element={<Technologies />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Route>
            </Routes>
        </Context.Provider>
    );
};

export default App;

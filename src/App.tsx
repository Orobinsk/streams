import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {MAIN_ROUTE} from "./const/const";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                ))}
                <Route
                    path="*"
                    element={<Navigate to={MAIN_ROUTE} replace/>}
                    key={MAIN_ROUTE}
                />
            </Routes>
        </>
    );
}

export default App;

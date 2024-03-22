import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import CardsPage from "../src/pages/CardsPage";
import App from "../src/App";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "/cards",element: <CardsPage />},
        ]
    },
    
])
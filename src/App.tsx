import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StartPage } from "./pages/start";
import { ScorePage } from "./pages/score";
import { GamePage } from "./pages/game";
import { Layout } from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="start" element={<StartPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="score" element={<ScorePage />} />
          <Route path="*" element={<Navigate to="start" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

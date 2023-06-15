import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {
  return <div></div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

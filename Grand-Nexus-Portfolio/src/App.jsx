import { createRoot } from "react-dom/client";

const App = () => {
  return <div></div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

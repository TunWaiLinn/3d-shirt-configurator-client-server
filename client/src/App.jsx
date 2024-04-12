import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import { Toaster } from "sonner";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <Toaster />
    </main>
  );
}

export default App;

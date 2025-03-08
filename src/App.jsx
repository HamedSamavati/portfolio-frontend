import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/BackToTop";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import "./styles/main.scss";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme === "dark" ? "dark-theme" : "bright-theme"}
      style={{ background: "transparent" }}
    >
      <AppRoutes />
      <BackToTop />
    </div>
  );
};

export default App;

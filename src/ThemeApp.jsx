import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import "./theme.css";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <h2>Part2-My Themed App</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className="content">
      <div className="card">Card 1 – {theme} mode</div>
      <div className="card">Card 2 – {theme} mode</div>
      <div className="card">Card 3 – {theme} mode</div>
    </main>
  );
}

function Footer() {
  const { theme } = useContext(ThemeContext);
  return <footer className="footer">Theme: {theme}</footer>;
}

function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export function ThemeApp() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
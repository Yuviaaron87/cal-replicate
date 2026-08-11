import Navbar from "./components/Navbar";
import Hero from "./pages/Home/Hero";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-16">
        <Hero />

            <AppRoutes />

      </main>
    </>
  );
}

export default App;
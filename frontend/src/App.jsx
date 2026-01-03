import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Schedule from "./components/Schedule"
import Prizes from "./components/Prizes"
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import Register from "./components/Register"
import FollowUs from "./components/FollowUs"

export default function App() {
  return (
    <div
      className="
        w-full
        overflow-x-hidden
        flex flex-col
      "
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <Hero />
      <Overview />
      <Schedule />
      <Prizes />
      <FAQs />
      <Contact />
      <Register />
      <FollowUs />
    </div>
  )
}

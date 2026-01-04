import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

export default function App() {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.className = "cursor";

        const galaxy = document.createElement("div");
        galaxy.className = "galaxy-layer";

        document.body.appendChild(galaxy);
        document.body.appendChild(cursor);

        const move = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            galaxy.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            cursor.remove();
            galaxy.remove();
        };
    }, []);

    return (
        <>
            <Navbar />
            <Home />
            <About />
        </>
    );
}

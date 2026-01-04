import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.className = "cursor";
        document.body.appendChild(cursor);

        const move = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            document.body.style.backgroundPosition =
                `${e.clientX / 40}px ${e.clientY / 40}px`;
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            cursor.remove();
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

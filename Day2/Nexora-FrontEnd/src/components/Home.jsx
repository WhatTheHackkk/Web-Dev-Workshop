import "./Home.css";

export default function Home() {
    return (
        <section className="home">
            <div className="home-content">
                <div className="home-glow"></div>

                <p className="home-tag">CREATIVE DEVELOPER</p>

                <h1 className="home-title glow-text">
                    Crafting <span className="animated-gradient">Modern</span><br />
                    Digital Experiences
                </h1>

                <p className="home-description">
                    I design and engineer immersive, high-performance web
                    applications that feel smooth, intentional, and visually
                    refined. My focus lies in blending clean architecture with
                    modern UI systems to deliver experiences that truly stand
                    out.
                </p>
            </div>
        </section>
    );
}

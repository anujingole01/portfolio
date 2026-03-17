import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const GlobalParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 z-0 pointer-events-none"
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: { opacity: 0.5 }
                        },
                    },
                },
                particles: {
                    color: { value: "#0ea5e9" },
                    links: {
                        color: "#0ea5e9",
                        distance: 150,
                        enable: true,
                        opacity: 0.2, // Increased base opacity
                        width: 1.5,   // Thicker links
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "out" },
                        random: true,
                        speed: 0.8,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 65, // Increased particle count
                    },
                    opacity: { 
                        value: { min: 0.2, max: 0.5 },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false
                        }
                    },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default GlobalParticles;

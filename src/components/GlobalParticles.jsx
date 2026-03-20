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
                        distance: 180,
                        enable: true,
                        opacity: 0.25,
                        width: 1,
                        triangles: {
                            enable: false // ensures it's just lines, no solid shapes
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" }, // Keeps the mesh connected within the screen
                        random: false,
                        speed: 0.5, // Slow, cohesive movement
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 90, // Higher count for more mesh intersections
                    },
                    opacity: { 
                        value: 0.4,
                    },
                    shape: { type: "circle" }, // Simple nodes, no moving big shapes
                    size: { value: { min: 0.5, max: 1.5 } }, // Very small nodes, pure mesh focus
                },
                detectRetina: true,
            }}
        />
    );
};

export default GlobalParticles;

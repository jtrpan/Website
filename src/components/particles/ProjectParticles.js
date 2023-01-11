import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim"; // loads tsparticles-slim
import {loadFull} from "tsparticles"; // loads tsparticles
import {useCallback, useMemo} from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            fpsLimit: 160,
            detectRetina: true,
            smooth: true,
            background: {
                color: "transparent", // this sets a background color for the canvas
            },
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                detect_on: "canvas", events: {
                    onhover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10
                        }
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    }, resize: true,
                }, modes: {
                    grab: {
                        distance: 400,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 0
                        }
                    },
                    repulse: {
                        distance: 200,
                        duration: 10
                    },
                },
            }, particles: {
                number: {
                    value: 100,
                },
                links: {
                    enable: false, // enabling this will make particles linked together
                    distance: 200, // maximum distance for linking the particles
                }, move: {
                    enable: true,
                    random: true,
                    speed: {min: 1, max: 4},
                }, opacity: {
                    value: {min: 0.3, max: 0.7}, // using a different opacity, to have some semitransparent effects
                }, size: {
                    value: {min: 2, max: 5},
                    random: true,
                    anim: {
                        speed: 3,
                        size_min: 0.3
                    }
                },
            },
        };
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine) => {
        // loadSlim(engine);
        loadFull(engine).then(r => console.log(engine)); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options}/>;
};

export default ParticlesComponent;

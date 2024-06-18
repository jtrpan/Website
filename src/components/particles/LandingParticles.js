import React from 'react';
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim"; // loads tsparticles-slim
import {Component, useCallback, useMemo} from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            fpsLimit: 120,
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
                    onHover: {
                        enable: true, mode: "grab"
                    }, onclick: {
                        enable: true, mode: "push"
                    }, resize: true,
                }, modes: {
                    push: {
                        quantity: 4, // number of particles to add on click
                    }, grab: {
                        distance: 300, // distance of the particles from the cursor
                    },
                },
            }, particles: {
                number: {
                    value: 70,
                },
                links: {
                    enable: true, // enabling this will make particles linked together
                    distance: 200, // maximum distance for linking the particles
                }, move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: {min: 1, max: 5}, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                }, opacity: {
                    value: {min: 0.3, max: 0.7}, // using a different opacity, to have some semitransparent effects
                }, size: {
                    value: 2,
                    // value: {min: 1, max: 3}, // let's randomize the particles size a bit
                },
            },
        };
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine) => {
        // loadSlim(engine);
        loadSlim(engine).then(r => console.log(engine)); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options}/>;

    /*
    <Particles
                id="landingparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width={this.state.windowWidth}
                height={this.state.windowHeight}
                params={{
                    fpsLimit: 120, particles: {
                        number: {
                            value: this.state.windowWidth * this.state.windowHeight / 15500,
                        }, size: {
                            value: 2
                        }
                    }, interactivity: {
                        detect_on: "canvas", events: {
                            onhover: {
                                enable: true, mode: "grab"
                            }, onclick: {
                                enable: true, mode: "push"
                            }, resize: true
                        },
                    }, "retina_detect": true
                }}
            />
     */
};

export default ParticlesComponent;

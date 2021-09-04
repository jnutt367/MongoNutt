gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({

        scrollTrigger: {
            trigger: "#trigger",
            markers: false,
            pin: false,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "restart none none restart"
        }
    })
    .fromTo("#author", { opacity: 0 }, { opacity: 1, scale: 1.1, color: "green", textShadow: "5px 5px black" })
    .to("#local", { fill: "green", ease: "elastic", padding: "0.1rem", margin: "0.5rem", duration: 3 }, 4)
    .to("#atlas", { scale: 3, fill: "black", ease: "elastic", duration: 3 }, 4)
    .to("#compass", { scale: 3, fill: "green", ease: "elastic", duration: 3, rotate: 45 }, 4)
    .fromTo("#next-react ", { opacity: 0, y: 100 }, { y: -20, duration: 2, ease: "elastic", opacity: 1 }, 0)
    .fromTo("#man", { opacity: 0 }, { y: -20, duration: 7, ease: "elastic", opacity: 1 }, 2)
    .fromTo("#go", { x: -300, opacity: 0 }, { x: 0, y: -20, duration: 3, ease: "elastic", opacity: 1 }, 2)
    .fromTo("#gone", { opacity: 0, y: 100 }, { y: -20, duration: 2, ease: "elastic", opacity: 1 })
    .to("#charts", { scale: 2, margin: "1rem", marginBottom: "2rem", ease: "bounce", duration: 2 }, 2)
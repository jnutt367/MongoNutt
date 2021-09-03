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
    .to("#local", { scale: 2, fill: "green", ease: "elastic", duration: 3 })
    .to("#atlas", { scale: 3, fill: "black", ease: "elastic", duration: 3 }, 1)
    .to("#compass", { scale: 3, fill: "green", ease: "elastic", duration: 3, rotate: 45 }, 1.5)
    .fromTo("#next-react ", { opacity: 0, y: 100 }, { y: -20, duration: 2, ease: "elastic", opacity: 1 }, 0)
    .fromTo("#man", { opacity: 0 }, { y: -20, duration: 7, ease: "elastic", opacity: 1 }, 2)
    .fromTo("#go", { x: -300, opacity: 0 }, { x: 0, y: -20, duration: 3, ease: "elastic", opacity: 1 }, 2)
    .fromTo("#gone", { opacity: 0, y: 100 }, { y: -20, duration: 2, ease: "elastic", opacity: 1 })
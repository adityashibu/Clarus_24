import {
    mobile,
    backend,
    creator,
    web,

    // Certifications
    acp,
    ait,
    aws,
    aws2,
    az900,
    cc,
    cisco,
    ciso,
    cspo,
    dp100,
    gc,
    google,
    googlearc,
    jadminpro,
    jadminprotect,
    jamb,
    jamf100,
    japro,
    japrotect,
    jconsultant,
    jcsecurity,
    jeng,
    jproexpert,
    jtechpro,

} from "../assets";

const services = [
    {
        title: "Envision",
        icon: web,
        description: "Assess, strategize, plan and roadmap the plan to achieve the desired business outcomes."
    },
    {
        title: "Design",
        icon: mobile,
        description: "Co-create solutions tailored to your industry's unique hybrid technology environment."
    },
    {
        title: "Adapt",
        icon: backend,
        description: "Migrate, modernize, and integrate workloads into optimal environments to advance your transformation."
    },
    {
        title: "Evolve",
        icon: creator,
        description: "Regularly evaluate progress, refine strategies, and prepare for the next phase of modernization."
    },
];

const about = [
    {
        title: "Happy Clients",
        count: 17,
    },
    {
        title: "Projects Completed",
        count: 30,
    },
    {
        title: "Hours of Support",
        count: 700,
    },
    {
        title: "Hard Workers",
        count: 7,
    }
];

const digitalWorkspace = [
    {
        title: "Apple Adoption",
        description: "Seamlessly transition to Apple devices with our expert guidance. Embrace the Apple ecosystem—your smooth journey starts here."
    },
    {
        title: "CISO Services",
        description: "Safeguard your organization from cyber threats with our expert CISO guidance. Strengthen your security posture and ensure regulatory compliance effortlessly."
    },
    {
        title: "End Compute Management",
        description: "Maximize the potential of your Apple devices and enhance your business efficiency. Device management has never been this effortless or effective"
    },
    {
        title: "Technical Services",
        description: "Optimize your IT infrastructure with our advanced technical services. Enhance performance and reliability across your digital environment."
    },
    {
        title: "Device Integration",
        description: "Ensure a seamless and reliable transition of Apple devices into your existing IT environment. We make integration feel like a perfect fit every time."
    },
    {
        title: "Consulting Services",
        description: "Unlock your business potential with our expert consulting services. Gain strategic insights and tailored solutions to drive growth and innovation."
    },
    {
        title: "Governance & Compliance",
        description: "Stay ahead of regulations with our governance and compliance services. Ensure your organization meets all legal requirements and industry standards."
    },
    {
        title: "Personified Automated Workflow",
        description: "Customize and automate your workflows for peak performance. Efficiency meets elegance in every task you undertake."
    },
    {
        title: "Manage",
        description: "Maintain and optimize your security posture with our proactive management services. We continuously monitor, update, and improve your defenses to stay ahead of potential risks."
    },
    {
        title: "Orchestrate",
        description: "Seamlessly integrate and coordinate security measures across your entire infrastructure. We ensure all components work in harmony to provide optimal protection and efficiency."
    },
    {
        title: "Design",
        description: "Craft comprehensive security solutions tailored to your unique needs. Our expert team designs robust frameworks that protect against evolving threats."
    },
    {
        title: "Helpdesk",
        description: "Enjoy 24/7 multilingual tech support for your Mac devices. Rest easy knowing our experts are always ready to assist, no matter the hour or language."
    },
];

export const navLinks = [
    {
        id: "home",
        title: "Home",
        url: "#home"
    },
    {
        id: "0",
        title: "About",
        url: "#about-us"
    },
    {
        id: "1",
        title: "Services",
        url: "#services",
    },
    {
        id: "2",
        title: "Contact",
        url: "#contact"
    },
];

const certificationsOdd = [
    { icon: acp },
    { icon: aws },
    { icon: az900 },
    { icon: cisco },
    { icon: cspo },
    { icon: gc },
    { icon: googlearc },
    { icon: jadminprotect },
    { icon: jamf100 },
    { icon: japrotect },
    { icon: jcsecurity },
    { icon: jproexpert },
];

const certificationsEven = [
    { icon: ait },
    { icon: aws2 },
    { icon: cc },
    { icon: ciso },
    { icon: dp100 },
    { icon: google },
    { icon: jadminpro },
    { icon: jamb },
    { icon: japro },
    { icon: jconsultant },
    { icon: jeng },
    { icon: jtechpro },
];



const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];


export { services, about, testimonials, digitalWorkspace, certificationsOdd, certificationsEven };
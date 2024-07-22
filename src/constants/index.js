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

    // Partners
    apple,
    forcepoint,
    microsoft,
    sophos,
    splunk,

    // SVG Icons
    applelogo,
    customercare,

} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        url: "#home",
        footerurl: "home"
    },
    {
        id: "about-us",
        title: "About",
        url: "#about-us",
        footerurl: "about-us"
    },
    {
        id: "contact",
        title: "Contact",
        url: "#contact",
        footerurl: "contact"
    },
];

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
        title: "Smart Workers",
        count: 7,
    }
];

const digitalWorkspace = [
    {
        title: "Apple Adoption",
        description: "Seamlessly transition to Apple devices with our expert guidance. Embrace the Apple ecosystem—your smooth journey starts here.",
        icon: applelogo,
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

const digitalWorkspaceFooter = [
    {
        title: "Apple Adoption",
    },
    {
        title: "End Compute Management",
    },
    {
        title: "Device Integration",
    },
    {
        title: "Consulting Services",
    },
    {
        title: "Personified Automated Workflow",
    },
    {
        title: "Design",
    },
    {
        title: "Helpdesk",
    },
];

const apple_adoption = [
    {
        maintitle: "Apple Adoption: Your Guide to Seamless Integration into the Apple Ecosystem",
        subheading: "Embrace the power of Apple",
        subtext: "Our Apple Adoption services are designed to seamlessly integrate Apple devices into your business environment, ensuring smooth transitions, enhanced productivity, and a user-friendly experience. From initial deployment to ongoing support, we provide comprehensive solutions tailored to your organization's needs."
    },
    {
        title: "Why Choose Apple Devices?",
        subpoints: [
            {
                point1: "Apple's reputation for quality, innovation, and user-friendly design.",
                point2: "Benefits of integrating Apple devices into your personal and professional life.",
                point3: "Overview of the Apple ecosystem: iPhone, iPad, Mac, Apple Watch, Apple TV, and services like iCloud, Apple Music, and Apple Pay."
            }
        ],
        subtext: "Combining an exceptional user experience with enterprise-friendly features, Apple devices provide the best platform for business. In fact, 100% of the Fortune 500 companies have adopted iOS, and 75% of employees choose Apple devices when given the option."
    },
    {
        title: "Our Apple Adoption Services Include",
        services: [
            {
                service: "Deployment and Configuration",
                subtext: "We handle the deployment and configuration of all Apple devices, ensuring they are set up correctly and securely from the start. Our team manages everything from device enrolment to network integration, making the transition smooth and hassle-free."
            },
            {
                service: "Training and Support",
                subtext: "Our experts provide thorough training for your team, ensuring they are comfortable and proficient with their new devices. Ongoing support is always available to address any issues or questions, offering both remote and on-site assistance.",
            },
            {
                service: "Integration",
                subtext: "We ensure seamless integration of Apple devices with your existing IT infrastructure, enhancing compatibility and performance. Whether you are integrating with Microsoft, Google, or other enterprise systems, we ensure everything works harmoniously.",
            },
            {
                service: "Security and Management",
                subtext: "Our services include robust security measures to protect your devices and data, as well as comprehensive management solutions to maintain optimal performance. We utilize advanced tools to manage device settings, updates, and security protocols, ensuring your devices are always protected and efficient.",
            },
            {
                service: "Customized Solutions",
                subtext: "Each business is unique, and so are our solutions. We work closely with you to understand your specific needs and tailor our services accordingly, ensuring that the Apple ecosystem works best for your business.",
            },
        ],
    },
    {
        title: "Why Choose Our Apple Adoption Services?",
        reasons: [
            {
                reason: "Expertise:",
                subtext: "Our team consists of certified Apple professionals with extensive experience in various industries.",
            },
            {
                reason: "Comprehensive Support:",
                subtext: "From initial setup to ongoing maintenance, we provide end-to-end support for all your Apple needs.",
            },
            {
                reason: "Scalability:",
                subtext: "Whether you are a small business or a large enterprise, our solutions are scalable to fit your growth and requirements.",
            },
            {
                reason: "Enhanced Productivity:",
                subtext: "Leveraging the intuitive design and powerful capabilities of Apple devices, we help your team achieve higher productivity and efficiency.",
            },
        ],
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

const partners = [
    { icon: apple },
    { icon: forcepoint },
    { icon: microsoft },
    { icon: sophos },
    { icon: splunk },
]

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

const faqs = [
    {
        question: "What service does Clarus24 offer?",
        answer: "Clarus24 provides expert consulting, cybersecurity solutions, SOC Operations and device management services, specializing in Apple products. Our goal is to enhance your business's security, efficiency, and productivity.",
    },
    {
        question: "How do you ensure that your consulting services are tailored to our needs?",
        answer: "We start with a comprehensive assessment of your current IT environment and business objectives. This allows us to develop customized strategies and solutions that align with your specific goals and requirements.",
    },
    {
        question: "Why should my business choose Clarus24's SOC services?",
        answer: "Clarus24's SOC offers advanced threat detection capabilities, a team of experienced cybersecurity professionals, and cutting-edge technology to protect your business from cyber threats efficiently and effectively.",
    },
    {
        question: "How does Clarus24's SOC detect and respond to threats?",
        answer: "We utilize advanced SIEM systems, intrusion detection systems, behavioral analysis, and threat intelligence, combined with machine learning algorithms, to detect threats. Our team responds swiftly to mitigate risks and minimize the impact of security incidents.",
    },
    {
        question: "How does Clarus24 improve device security?",
        answer: "Clarus24 improves security by enforcing encryption, enabling remote lock and wipe capabilities, managing app distribution, and providing real-time monitoring and alerts for potential security threats.",
    },
    {
        question: "Why is Clarus24's endpoint device management essential for my business?",
        answer: "Our endpoint device management service protects sensitive data, ensures regulatory compliance, prevents unauthorized access, and mitigates risks associated with endpoint vulnerabilities, keeping your business secure.",
    },
    {
        question: "Do you partner with other companies to provide your services?",
        answer: "We collaborate with leading technology and security partners to offer comprehensive and cutting-edge solutions. Our partnerships enable us to deliver high-quality services and support to our clients.",
    },
];


export {
    services, about, testimonials, digitalWorkspace, certificationsOdd, certificationsEven, partners, faqs, digitalWorkspaceFooter,
    apple_adoption,
};
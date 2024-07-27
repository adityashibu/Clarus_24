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

export const servicesFooter = [
    {
        id: "managed-defense",
        title: "Managed Defense",
        url: "our-services",
    },
    {
        id: "managed-endcompute",
        title: "Managed Endcompute",
        url: "our-services",
    },
    {
        id: "managed-risk",
        title: "Managed Risk",
        url: "our-services",
    },
    {
        id: "managed-security",
        title: "Managed Security",
        url: "our-services",
    },
];

const services = [
    {
        title: "Managed Defense",
        icon: web,
        description: "Assess, strategize, plan and roadmap the plan to achieve the desired business outcomes.",
        backlinks: [
            { name: "Managed Detection and Response", link: "/mdr" },
            { name: "Extended Detection and Response", link: "/xdr" },
            { name: "Endpoint Detection and Response", link: "/endpoint-detection" },
            { name: "Managed Microsoft Sentinel Detection and Response", link: "/microsoft-detection" },
            { name: "Digital Forensics and Incident Response", link: "/digital-forensics" },
        ]
    },
    {
        title: "Managed Endcompute",
        icon: mobile,
        description: "Co-create solutions tailored to your industry's unique hybrid technology environment.",
        backlinks: [
            { name: "Mobile Device Manager", link: "/mobile-manager" },
            { name: "Compliance assessment and Remediation", link: "/compliance-assessment" },
            { name: "Cross Platform Integration", link: "/cross-platform" },
            { name: "Apple Adoption", link: "/apple-adoption" },
            { name: "Configuration Health Check", link: "/configuration-check" },
            { name: "Hardware Health Check", link: "/hardware-check" },
            { name: "Multilingual Helpdesk", link: "/helpdesk" },
        ]
    },
    {
        title: "Managed Risk",
        icon: backend,
        description: "Migrate, modernize, and integrate workloads into optimal environments to advance your transformation.",
        backlinks: [
            { name: "Penetration Testing", link: "/pentesting" },
            { name: "Vulnerability Management as a Service", link: "/vmaas" },
            { name: "CISO as a Service", link: "/ciso-services" },
            { name: "Cyber Security Controls Assessment", link: "/cybersecurity-controls" },
            { name: "Web Application Security Testing", link: "/webapplication-security" },
            { name: "Phishing Attack Simulation", link: "/phishing-simulation" },
        ]
    },
    {
        title: "Managed Security",
        icon: creator,
        description: "Regularly evaluate progress, refine strategies, and prepare for the next phase of modernization.",
        backlinks: [
            { name: "Managed Endpoint Protection", link: "/epp" },
            { name: "Managed Endpoint Security", link: "/endpoint-security" },
            { name: "Darktrace/Email as a Service", link: "/darktrace" },
            { name: "Managed Data Security", link: "/data-security" },
            { name: "Threat and Risk Intelligence", link: "/tri" },
            { name: "Identity and Access Management", link: "/iam" },
        ]
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
        link: "/apple_adoption",
    },
    {
        title: "CISO Services",
        description: "Safeguard your organization from cyber threats with our expert CISO guidance. Strengthen your security posture and ensure regulatory compliance effortlessly.",
        link: "/ciso-services",
    },
    {
        title: "End Compute Management",
        description: "Maximize the potential of your Apple devices and enhance your business efficiency. Device management has never been this effortless or effective",
        link: "/end-compute",
    },
    {
        title: "Technical Services",
        description: "Optimize your IT infrastructure with our advanced technical services. Enhance performance and reliability across your digital environment.",
        link: "/technical",
    },
    {
        title: "Device Integration",
        description: "Ensure a seamless and reliable transition of Apple devices into your existing IT environment. We make integration feel like a perfect fit every time.",
        link: "/device-integration",
    },
    {
        title: "Consulting Services",
        description: "Unlock your business potential with our expert consulting services. Gain strategic insights and tailored solutions to drive growth and innovation.",
        link: "/consulting",
    },
    {
        title: "Governance & Compliance",
        description: "Stay ahead of regulations with our governance and compliance services. Ensure your organization meets all legal requirements and industry standards.",
        link: "/governance",
    },
    {
        title: "Personified Automated Workflow",
        description: "Customize and automate your workflows for peak performance. Efficiency meets elegance in every task you undertake.",
        link: "/automated-workflow",
    },
    {
        title: "Manage",
        description: "Maintain and optimize your security posture with our proactive management services. We continuously monitor, update, and improve your defenses to stay ahead of potential risks.",
        link: "/manage",
    },
    {
        title: "Orchestrate",
        description: "Seamlessly integrate and coordinate security measures across your entire infrastructure. We ensure all components work in harmony to provide optimal protection and efficiency.",
        link: "/orchestrate",
    },
    {
        title: "Design",
        description: "Craft comprehensive security solutions tailored to your unique needs. Our expert team designs robust frameworks that protect against evolving threats.",
        link: "/design",
    },
    {
        title: "Helpdesk",
        description: "Enjoy 24/7 multilingual tech support for your Mac devices. Rest easy knowing our experts are always ready to assist, no matter the hour or language.",
        link: "/helpdesk",
    },
];

const digitalWorkspaceFooter = [
    {
        title: "Apple Adoption",
        link: "/apple-adoption",
    },
    {
        title: "End Compute Management",
        link: "/end-compute",
    },
    {
        title: "Device Integration",
        link: "/device-integration",
    },
    {
        title: "Consulting Services",
        link: "/consulting",
    },
    {
        title: "Personified Automated Workflow",
        link: "/automated-workflow",
    },
    {
        title: "Design",
        link: "/design",
    },
    {
        title: "Helpdesk",
        link: "/helpdesk",
    },
];

const apple_adoption = [
    {
        subpoints: [
            {
                title: "Innovation",
                point: "Apple's reputation for quality, innovation, and user-friendly design.",
            },
            {
                title: "Benefits",
                point: "Benefits of integrating Apple devices into your personal and professional life.",
            },
            {
                title: "Ecosystem",
                point: "Overview of the Apple ecosystem: iPhone, iPad, Mac, Apple Watch, Apple TV, and services like iCloud, Apple Music, and Apple Pay.",
            },
        ],
    },
];

const apple_adoption_services = [
    {
        subpoints: [
            {
                title: "Deployment and Configuration",
                description: "We handle the deployment and configuration of all Apple devices, ensuring they are set up correctly and securely from the start. Our team manages everything from device enrolment to network integration, making the transition smooth and hassle-free.",
            },
            {
                title: "Training and Support",
                description: "Our experts provide thorough training for your team, ensuring they are comfortable and proficient with their new devices. Ongoing support is always available to address any issues or questions, offering both remote and on-site assistance.",
            },
            {
                title: "Integration",
                description: "We ensure seamless integration of Apple devices with your existing IT infrastructure, enhancing compatibility and performance. Whether you are integrating with Microsoft, Google, or other enterprise systems, we ensure everything works harmoniously.",
            },
            {
                title: "Security and Management",
                description: "Our services include robust security measures to protect your devices and data, as well as comprehensive management solutions to maintain optimal performance. We utilize advanced tools to manage device settings, updates, and security protocols, ensuring your devices are always protected and efficient.",
            },
            {
                title: "Customized Solutions",
                description: "Each business is unique, and so are our solutions. We work closely with you to understand your specific needs and tailor our services accordingly, ensuring that the Apple ecosystem works best for your business.",
            },
        ]
    }
];

const apple_adoption_reasons = [
    {
        subpoints: [
            {
                title: "Expertise",
                description: "Our team consists of certified Apple professionals with extensive experience in various industries.",
            },
            {
                title: "Comprehensive Support",
                description: "From initial setup to ongoing maintenance, we provide end-to-end support for all your Apple needs.",
            },
            {
                title: "Scalability",
                description: "Whether you are a small business or a large enterprise, our solutions are scalable to fit your growth and requirements.",
            },
            {
                title: "Enhanced Productivity",
                description: "Leveraging the intuitive design and powerful capabilities of Apple devices, we help your team achieve higher productivity and efficiency.",
            },
        ],
    },
];

const ciso_services = [
    {
        subpoints: [
            {
                title: "CISO Strategy Development",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
            },
            {
                title: "CISO as a Service (CaaS)",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "On-demand CISO Expertise: Access to experienced CISOs as needed.",
                    },
                    {
                        subpoint: "Flexible Engagement Models: Part-time, interim, or virtual CISO services.",
                    },
                    {
                        subpoint: "Tailored Security Programs: Customized programs to fit the specific needs of your organization.",
                    }
                ],
                benefits: "Cost-effective, scalable, access to top-tier security professionals.",
            },
            {
                title: "Compliance and Risk Management",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
            },
            {
                title: "Security Awareness and Training",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
            },
            {
                title: "Incident Response and Management",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
            },
            {
                title: "Continuous Security Monitoring",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
            },
            {
                title: "Data Protection and Privacy",
                description: "Assist organizations in developing a comprehensive cybersecurity strategy. This includes assessing the current security posture, identifying risks, and creating a long-term roadmap.",
                components: [
                    {
                        subpoint: "Security Posture Assessment: Conduct thorough assessments to understand the current security state.",
                    },
                    {
                        subpoint: "Risk Management Strategy: Develop strategies to manage and mitigate risks.",
                    },
                    {
                        subpoint: "Long-term Cybersecurity Roadmap: Create a strategic plan outlining the security initiatives for the next 3-5 years.",
                    }
                ],
                benefits: "Enhanced security alignment with business goals, proactive threat management, strategic investment in security.",
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
    apple_adoption, apple_adoption_services, apple_adoption_reasons, ciso_services,
};
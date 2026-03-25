const baseUrl = import.meta.env.BASE_URL;

export const rawProjects = [
    {
        slug: "JCleaners",
        title: "JCleaners",
        theme: { primary: "#299aca", blob1: "#299aca", blob2: "#02285b", bg: "#010c1a" },
        description: "", 

        tools: [
            { name: "HTML", image: "/images/html5.png" },
            { name: "CSS", image: "/images/css.png" },
            { name: "JavaScript", image: "/images/javascript.png" },
            { name: "Sass", image: "/images/sass.png" },
        ],

        cards: [
            {
                title: "JCleaners_card1_title",
                text: "JCleaners_card1_text",
                image: "/projects/jcleaners1.png",
                video: "/projects/jcleaners-demo1.mp4"
            },
            {
                title: "JCleaners_card2_title",
                text: "JCleaners_card2_text",
                image: "/projects/jcleaners2.png",
                video: "/projects/jcleaners-demo2.mp4"
            }
        ],

        link: "https://sergiolttz.github.io/JCleaners-Landing-Page/",
        repo: "https://github.com/sergiolttz/JCleaners-Landing-Page"
    },
    {
        slug: "TasteBook",
        title: "TasteBook",
        theme: { primary: "#c99456", blob1: "#596434", blob2: "#627522", bg: "#0c1502" },
        description: "",

        tools: [
            { name: "Django", image: "/images/django.png" },
            { name: "HTML", image: "/images/html5.png" },
            { name: "CSS", image: "/images/css.png" },
            { name: "JavaScript", image: "/images/javascript.png" },
        ],

        cards: [
            {
                title: "TasteBook_card1_title",
                text: "TasteBook_card1_text",
                image: "/projects/tastebook1.png",
                video: "/projects/tastebook-demo1.mp4"
            },
            {
                title: "TasteBook_card2_title",
                text: "TasteBook_card2_text",
                image: "/projects/tastebook2.png",
                video: "/projects/tastebook-demo2.mp4"
            }
        ],

        link: "https://sergiolttz.pythonanywhere.com/",
        repo: "https://github.com/sergiolttz/cookbook"
    },
    {
        slug: "Chemiconsult",
        title: "Chemiconsult",
        theme: { primary: "#36b7dd", blob1: "#36b7dd", blob2: "#1393ea", bg: "#02080d" },
        description: "",

        tools: [
            { name: "Wordpress", image: "/images/wordpress.png" },
            { name: "HTML", image: "/images/html5.png" },
            { name: "CSS", image: "/images/css.png" },
        ],

        cards: [
            {
                title: "Chemiconsult_card1_title",
                text: "Chemiconsult_card1_text",
                image: "/projects/chemiconsult1.png",
                video: "/projects/cChemiconsult-demo1.mp4"
            },
            {
                title: "Chemiconsult_card2_title",
                text: "Chemiconsult_card2_text",
                image: "/projects/chemiconsult2.png",
                video: "/projects/chemiconsult-demo2.mp4"
            }
        ],

        link: "https://chemiconsult.com/",
    },
    {
        slug: "Movida",
        title: "Movida",
        theme: { primary: "#c3131b", blob1: "#00bbe0", blob2: "#0199cd", bg: "#000a0d" },
        description: "",

        tools: [
            { name: "Photoshop", image: "/images/photoshop.png" },
        ],

        cards: [
            {
                title: "Movida_card1_title",
                text: "Movida_card1_text",
                image: "/projects/movida1.jpg"
            },
            {
                title: "Movida_card2_title",
                text: "Movida_card2_text",
                image: "/projects/movida2.jpg"
            }
        ],
    },
    {
        slug: "JGlobal",
        title: "JGlobal Service",
        theme: { primary: "#2896c5", blob1: "#2896c5", blob2: "#135b79", bg: "#011826" },
        description: "",

        tools: [
            { name: "Photoshop", image: "/images/photoshop.png" },
        ],

        cards: [
            {
                title: "JGlobal_card1_title",
                text: "JGlobal_card1_text",
                image: "/projects/jglobal1.png"
            },
            {
                title: "JGlobal_card2_title",
                text: "JGlobal_card2_text",
                image: "/projects/jglobal2.webp"
            }
        ],
    },
    {
        slug: "Sport",
        title: "Diseño deportivo",
        description: "",
        theme: {primary: "#ffcc00", blob1: "#ff9900", blob2: "#ffee00", bg: "#050505"},

        tools: [
            { name: "Photoshop", image: "/images/photoshop.png" },
        ],

        cards: [
            {
                title: "Sport_card1_title",
                text: "Sport_card1_text",
                image: "/projects/sport1.png"
            },
            {
                title: "Sport_card2_title",
                text: "Sport_card2_text",
                image: "/projects/sport2.png"
            }
        ],
    }
];

const formatPaths = (data) => {
    return data.map(project => ({
        ...project,
        tools: project.tools?.map(tool => ({
            ...tool,
            image: tool.image ? `${baseUrl}${tool.image.replace(/^\//, '')}` : tool.image
        })),
        cards: project.cards?.map(card => ({
            ...card,
            image: card.image ? `${baseUrl}${card.image.replace(/^\//, '')}` : card.image,
            video: card.video ? `${baseUrl}${card.video.replace(/^\//, '')}` : card.video
        }))
    }));
};

export const projects = formatPaths(rawProjects);
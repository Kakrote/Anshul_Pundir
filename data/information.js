export const navLink = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Contact", url: "#contact" }
];

export const hero_section = {
    heading: ["Hello, I'm",
        "ANSHUL PUNDIR "
    ],
    subheading: ["I’m a Full stack web developer.",
        "I strive to build beautiful web application.",
        " Experienced in React, Node.js, MongoDB "
    ],
    kpis: [["10+", "Projects completed"], ["1", "Internship"]],
    image: "/images/hero_img.png",

}

const icon_url = "/images/icons/"

export const about = {
    para: ["Skilled in the MERN stack, I create dynamic web applications with clean architecture and responsive design.",
        " I'm also diving into data analytics using Python, SQL, and visualization tools to bridge the gap between development and data-driven decision-making."
    ],
    skills: [
        {
            icon: `${icon_url}mongoDB.png`,
            name: "MongoDB"
        },
        {
            icon: `${icon_url}express.png`,
            name: "ExpressJs"
        },
        {
            icon: `${icon_url}react.png`,
            name: "ReactJs"
        },
        {
            icon: `${icon_url}node.png`,
            name: "Node.Js"
        },
        {
            icon: `${icon_url}next.png`,
            name: "NextJs"
        },
        {
            icon: `${icon_url}postgrce.png`,
            name: "PostgreSQL"
        },
        {
            icon: `${icon_url}python.png`,
            name: "Python"
        },
        {
            icon: `${icon_url}pandas.png`,
            name: "Pandas"
        },
        {
            icon: `${icon_url}numpy.png`,
            name: "Numpy"
        }

    ]
}

const project_img="/images/project_img/"

export const projects=[
    {
        title:"TaskNest",
        discription:"taskNest is a task mangement web application.Use to manage Task to increase productivity and set daily goals ",
        image:`${project_img}tasknest.png`
    },
    {
        title:"LinkSorty",
        discription:"LinkSorty is web app where you can save your important links with custom name for easy use  ",
        image:`${project_img}linkshorty.png`
    }
]

const social_link="/images/social/img/"

export const contact={
    phone:"+91 7505316239",
    mail:"anshul.pundir111@gmail.com",
    linkedIn:"https://linkedin.com/in/anshul-pundir2002",
    github:"https://github.com/Kakrote",
    resume:"/resume/Anshul_Pundir.pdf",
    para: ["Hy,","It will be great to here from you"]
}
export const contact_img={
    phone:`${social_link}phone.png`,
    mail:`${social_link}mail.png`,
    linkedIn:`${social_link}linkedIn.png`,
    github:`${social_link}git.png`
} 

// array of objects      users details
const users = [
    {
        id: 1,
        backgroundImage: "https://media.licdn.com/dms/image/v2/D4D16AQGiTchyPK2EBA/profile-displaybackgroundimage-shrink_350_1400/B4DaDAJlk5JUAU-/0/1789930134078?e=1792627200&v=beta&t=QL6uvIGf0mT-YXHOobcSOkUTHr2k4i-IC3RMHSOkxBA",
        profileImage: "https://media.licdn.com/dms/image/v2/D4D35AQEwbnkwDXWVwg/profile-framedphoto-shrink_200_200/B4DaC2Bzw7JgAQ-/0/1789760323004?e=1791367200&v=beta&t=ONiE0BCf8zf63DT4oZkmkh2Y_W0joas0_8mXAcnfQNk",
        name: "Muhammad Abbas",
        passion: "Full Stack Developer",
        description: "Passionate developer who enjoys building modern, responsive and user-friendly web applications."
    },

    {
        id: 2,
        backgroundImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        name: "Sarah Johnson",
        passion: "UI/UX Designer",
        description: "Creative designer focused on creating clean, beautiful and easy-to-use digital experiences."
    },

    {
        id: 3,
        backgroundImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        name: "Alex Carter",
        passion: "Frontend Developer",
        description: "Frontend developer who loves transforming ideas into interactive and responsive websites."
    },

    {
        id: 4,
        backgroundImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        name: "Emily Davis",
        passion: "Graphic Designer",
        description: "Creative professional passionate about branding, visual design and meaningful digital experiences."
    },
    {
    id: 5,
    backgroundImage: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Daniel Wilson",
    passion: "Backend Developer",
    description: "Backend developer focused on building secure, scalable and reliable server-side applications."
},

{
    id: 6,
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    name: "Sophia Miller",
    passion: "Product Designer",
    description: "Product designer passionate about solving problems through thoughtful design and simple user experiences."
},

{
    id: 7,
    backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "James Anderson",
    passion: "Software Engineer",
    description: "Software engineer who enjoys developing efficient solutions and learning modern technologies."
},

{
    id: 8,
    backgroundImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    profileImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    name: "Olivia Taylor",
    passion: "Web Developer",
    description: "Web developer interested in creating responsive websites and interactive digital experiences."
}
];


// access reference 
const backgroundImage = document.querySelector(".background-image");
const profileImage = document.querySelector(".profile-image");
const name = document.querySelector(".name");
const passion = document.querySelector(".passion");
const descriptions = document.querySelector(".descriptions");
const cardWrapper = document.querySelector(".card-wrapper")

const navigationDots = document.querySelector(".navigation-dots");
//// dot navigations
const createDots = () => {
    navigationDots.innerHTML = "";

    users.forEach((user, index) => {
        const dot = document.createElement("span");

        dot.classList.add("dot");

        if (index === currentIndex) {
            dot.classList.add("active");
        }

        dot.dataset.index = index;

        navigationDots.appendChild(dot);
    });
};

//current-state
let currentIndex = 0;
const showProfileDetails = () => {
    const currentUser = users[currentIndex];

    backgroundImage.src = currentUser.backgroundImage;
    profileImage.src = currentUser.profileImage;
    name.textContent = currentUser.name;
    passion.textContent = currentUser.passion;
    descriptions.textContent = currentUser.description;
    createDots()
};


// event on container
cardWrapper.addEventListener("click", (e) => {

    if (e.target.classList.contains("next-btn")) {
        currentIndex++;

        if (currentIndex >= users.length) {
            currentIndex = 0;
        }
        showProfileDetails();
    }

    if (e.target.classList.contains("prev-btn")) {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = users.length - 1;
        }
        showProfileDetails();
    }

});
showProfileDetails()


// toast-notifications
const message = document.querySelector(".sent-messgage");

message.addEventListener("click", () => {

    setTimeout(() => {
        const toast = document.querySelector(".toast-notification");

        toast.classList.add("show");

        setTimeout(()=>{
        toast.classList.remove("show")
        },3000)

    }, 300);

});




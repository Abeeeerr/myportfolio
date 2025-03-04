import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"


export let colors = ["rgb(242, 115, 225), rgb(200, 147, 236)"];

export let singlePage = false;
export const info = {
    firstName: "Abeer",
    lastName: "Beigh",
    initials: "Ab",
    position: "Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Bangalore'
        },
        {
            emoji: "💼",
            text: "Academic Trainee at KPMG"
        },
        {
            emoji: "📧",
            text: "abeer1864a@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Abeeeer",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/abeerbeigh/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! I'm Abeer. I'm a developer passionate about creating user-friendly applications and working on innovative projects. Let's build something amazing!",
    skills:
        {
            proficientWith: ['JavaScript', 'React', 'Git', 'HTML', 'CSS', 'Figma', 'Python'],
            exposedTo: ['Java']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'Painting',
            emoji: '🎨'
        },
        {
            label: 'Cooking',
            emoji: '🥘'
        }

    ],
    portfolio: [ 
        {
            title: "Weather App",
            live: "https://abeeeerr.github.io/Weather_App/", 
            source: "https://github.com/Abeeeerr/Weather_App", 
            image: mock1
        },
        {
            title: "School Website",
            live: "https://abeeeerr.github.io/SchoolWebsite/",
            source: "https://github.com/Abeeeerr/SchoolWebsite",
            image: mock2
        },
        
    ]
}
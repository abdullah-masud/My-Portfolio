import startech1 from '../../assets/img/projects/Star-Tech.png';
import startech2 from '../../assets/img/projects/details/star-tech2.png';
import startech3 from '../../assets/img/projects/details/star-tech3.png';

import carstock1 from '../../assets/img/projects/car-stock.png';
import carstock2 from '../../assets/img/projects/details/car-stock2.png';
import carstock3 from '../../assets/img/projects/details/car-stock3.png';


import tourinc1 from '../../assets/img/projects/tour.inc.png';
import tourinc2 from '../../assets/img/projects/details/tourinc2.png';
import tourinc3 from '../../assets/img/projects/details/tourinc3.png';


import techbook1 from '../../assets/img/projects/techbook.png';
import techbook2 from '../../assets/img/projects/details/techbook2.png';
import techbook3 from '../../assets/img/projects/details/techbook3.png';

import conventionCenter1 from '../../assets/img/projects/convention-center.png';
import conventionCenter2 from '../../assets/img/projects/details/convention-center2.png';
import conventionCenter3 from '../../assets/img/projects/details/convention-center3.png';

import easytravel from '../../assets/img/projects/easy-travel.png'

// import techIq1 from '../../assets/img/projects/techIq.png';
// import techIq2 from '../../assets/img/projects/details/techIq2.png';
// import techIq3 from '../../assets/img/projects/details/techIq3.png';

const mernProjectsData = [
    {
        id: '1',
        image1: startech1,
        image2: startech2,
        image3: startech3,
        name: 'Star Tech',
        // category: 'mern',
        description: 'Star Tech provides all of the most improved computer components for your computer',
        fullDescription: "Star Tech provides all of the most recent and improved computer components for your future computer. If you are a techie, we have just what you are searching for. You can buy whatever you want from the website and pay using credit card. You can also login and update your profile. After the purchase the shipment status can be updated via admin.",
        technologies: "HTML, CSS, Bootstrap, JavaScript, React, React Router, React-Bootstrap, Node.js, Express.js MongoDB, Firebase, Axios, useQuery, React Toastify, JWT, Heroku.",
        liveSiteHref: 'https://inside-pc-85a30.web.app/',
        githubClientHref: 'https://github.com/abdullah-masud/Star-Tech-Client',
        githubServerHref: 'https://github.com/abdullah-masud/Star-Tech-Server',
    },
    {
        id: '2',
        image1: carstock1,
        image2: carstock2,
        image3: carstock3,
        name: 'Car Stock',
        // category: 'mern',
        technologies: "HTML, CSS, Bootstrap, JavaScript, React, React Router, React-Bootstrap, Node.js, Express.js MongoDB, Firebase, Axios, React Toastify, JWT, Heroku.",
        description: 'Car Stock is a warehouse management website where you may find the most recent cars',
        fullDescription: "Car Stock is a warehouse management website where you may find  the most recent cars. From Ferrari to Lamborghini, there's something for everyone.  By clicking a button, you may control the car's stock. You may also control the vehicles you've added. In My Items page, you'll see the automobiles you've added. You may also log in and manually add automobiles to the inventory. You may also read other people's reviews and leave your own.",
        liveSiteHref: 'https://warehouse-management-7e053.web.app/',
        githubClientHref: 'https://github.com/abdullah-masud/Car-Stock-Client',
        githubServerHref: 'https://github.com/abdullah-masud/Car-Stock-Server',
    },
    {
        id: '3',
        image1: techbook1,
        image2: techbook2,
        image3: techbook3,
        name: 'TechBook',
        // category: 'mern',
        technologies: "HTML, CSS, Bootstrap, JavaScript, React, React Router, React-Bootstrap, Node.js, Express.js MongoDB, Firebase, Axios, React Toastify, Heroku.",
        description: 'TechBook is a place where users may submit blogs and read blogs that others have created',
        fullDescription: "TechBook is a place where users may submit blogs and read blogs that others have created. On the front page, you may browse a selection of blogs that everyone has shared. Visitors to this website can read blogs without registering. However, registration is a requirement for everyone who wants to write their own blog.",
        liveSiteHref: 'https://techbook-44fbb.web.app/',
        githubClientHref: 'https://github.com/abdullah-masud/TechBook-Client',
        githubServerHref: 'https://github.com/abdullah-masud/Techbook-Server'
    },
    {
        id: '4',
        image1: tourinc1,
        image2: tourinc2,
        image3: tourinc3,
        name: 'Tour.inc',
        // category: 'mern',
        technologies: ": HTML, CSS, Bootstrap, JavaScript, React, React Router, React-Bootstrap, Firebase, React Firebase Hook",
        description: 'This website offers you with all of the services of a professional tourist guide',
        fullDescription: "This website offers you with all of the services of a professional tourist guide. We provide three services to our valued visitors. To reserve services, you must first log in or register on our website. On our website, we also offer a number of consumer reviews. This website also offers a number of FAQs on the blog page. On the website, there is also a about us page where you may learn more about us.",
        liveSiteHref: 'https://tour-inc.web.app/',
        githubClientHref: 'https://github.com/abdullah-masud/tour.inc',
    },


    {
        id: '5',
        image1: conventionCenter1,
        image2: conventionCenter2,
        image3: conventionCenter3,
        name: 'Frontend bootcamp',
        // category: 'mern',
        technologies: "HTML, CSS, Bootstrap ",
        description: 'This website offers event management and wedding planning offers',
        fullDescription: "Our Event Management & Wedding Planning offers you a user-friendly environment for facility scheduling and event management",
        liveSiteHref: 'https://international-convention-center-bootstrap.netlify.app/',
        githubClientHref: 'https://github.com/abdullah-masud/Convention-Center-Bootstrap',
    },
    {
        id: '6',
        image1: easytravel,
        name: 'Easy Travel',
        // category: 'mern',
        technologies: "React, Bootstrap, JavaScript, React-Router, recharts",
        description: 'Travel Webiste Crafting Tanzania tours for a lifetime of memories',
        liveSiteHref: 'https://easy-travels-client.vercel.app/',
        githubClientHref: 'https://github.com/abdullah-masud/Easy-Travels-Client',
    },
    // {
    //     id: '6',
    //     image1: techIq1,
    //     image2: techIq2,
    //     image3: techIq3,
    //     name: 'TechIQ',
    //     category: 'mern',
    //     technologies: "React, Bootstrap, JavaScript, React-Router, recharts",
    //     description: 'This website provides you with the latest product statistics with the help of dashboard',
    //     fullDescription: "This website provides you with the latest product statistics with the help of dashboard",
    //     liveSiteHref: 'https://techiq.netlify.app/',
    //     githubClientHref: 'https://github.com/abdullah-masud/techIQ',
    // },

];

export default mernProjectsData
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faDesktop,  faSuitcase, faGlobe}  from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faFolder, faCalendar, faMessage , faWindowMaximize}  from '@fortawesome/free-regular-svg-icons';

export const services_Data = [
    {
        id: 1,
        title: 'Mail',
        icon: <FontAwesomeIcon icon={faEnvelope} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 2,
        title: 'Visual',
        icon: <FontAwesomeIcon icon={faDesktop} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 3,
        title: 'File',
        icon: <FontAwesomeIcon icon={faFolder} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 4,
        title: 'Calendar',
        icon: <FontAwesomeIcon icon={faCalendar} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 5,
        title: 'Suitcase',
        icon: <FontAwesomeIcon icon={faSuitcase} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 6,
        title: 'Chat',
        icon: <FontAwesomeIcon icon={faMessage} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 7,
        title: 'Global',
        icon: <FontAwesomeIcon icon={faGlobe} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        id: 8,
        title: 'Sites',
        icon: <FontAwesomeIcon icon={faWindowMaximize} /> ,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
];
import financeImg from '../assets/finance.png';
import ipsImg from '../assets/ips.png';
import iotImg from '../assets/iot.png';

export const projects = [
    {
        title: "Personal Finance & Budget Tracker",
        description: "An online-based system to record income, expenses, and budgets with real-time tracking. Features transaction management, persistent data storage, and automated alerts for budget limits.",
        image: financeImg,
        tags: ["PHP", "JavaScript", "MySQL", "Web Dev"],
        links: {
            demo: "#",
            github: "https://github.com/anujingole01"
        }
    },
    {
        title: "Checkpoint IPS Speed Breaker",
        description: "Enhanced IPS detection accuracy by 20% and boosted operational efficiency through centralized management. Optimized system reliability for critical network security operations.",
        image: ipsImg,
        tags: ["TCP/IP", "Network Security", "IPS", "Check Point"],
        links: {
            demo: "#",
            github: "https://github.com/anujingole01"
        }
    },
    {
        title: "IoT Smart Door Lock",
        description: "ESP32-CAM based smart lock with live video monitoring and secure unlock endpoints. Features relay control and optimized power management for reliable home security.",
        image: iotImg,
        tags: ["ESP32-CAM", "Arduino", "IoT", "Embedded Systems"],
        links: {
            demo: "#",
            github: "https://github.com/anujingole01"
        }
    }
];

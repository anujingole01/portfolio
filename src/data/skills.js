import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPhp, FaJava, FaBootstrap, FaDocker, FaFigma } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiMysql, SiCanva, SiPostman, SiCplusplus, SiArduino } from "react-icons/si";

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "PHP", icon: FaPhp, color: "#777BB4" },
            { name: "Java", icon: FaJava, color: "#007396" },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Express", icon: SiExpress, color: "#FFFFFF" }, // Kept White as requested
        ]
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Canva", icon: SiCanva, color: "#00C4CC" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: FaFigma, color: "#F24E1E" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Arduino", icon: SiArduino, color: "#00979D" }, 
        ]
    }
];

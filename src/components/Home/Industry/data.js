import healthcare from "../../../assets/healthcare.jpg";
import banking from "../../../assets/banking.webp";
import ngo from "../../../assets/ngo.jpg";
import tours from "../../../assets/tours.jpg";
import construction from "../../../assets/construction.jpg";
import security from "../../../assets/security.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faBuilding,
  faBuildingNgo,
  faCar,
  faChild,
  faEnvelope,
  faLock,
  faPaw,
  faPhone,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const data = [
  {
    title: "Healthcare",
    desc: "Seamlessly delivering end-to-end digital health experiencesEffortlessly orchestrating the seamless integration of cutting-edge technologies to deliver comprehensive end-to-end digital health experiences that empower individuals to proactively manage their well-being, while fostering collaboration among healthcare providers for optimal patient care.",
    image: healthcare,
    icon: faSuitcaseMedical,
  },
  {
    title: "Banking, Financial Services & Insurance",
    desc: "Pioneering transformative shifts in the financial landscape by harnessing the collective expertise of our seasoned professionals in banking, financial services, insurance, and payments, to craft innovative solutions that redefine industry standards and empower individuals and businesses to thrive in an ever-evolving economic ecosystem.",
    image: banking,
    icon: faBank,
  },
  {
    title: "NGO Organizations",
    desc: "Dedicatedly empowering communities and catalyzing meaningful change through concerted efforts that prioritize inclusivity, collaboration, and sustainable practices, thereby fostering a brighter, more equitable future for all.",
    image: ngo,
    icon: faBuildingNgo,
  },
  {
    title: "Tours And Travels",
    desc: "Embark on unforgettable journeys curated with meticulous attention to detail, offering tailored experiences and unparalleled hospitality that exceed expectations, creating cherished memories and fostering lasting connections with each destination explored.",
    image: tours,
    icon: faCar,
  },
  {
    title: "Construction Firms",
    desc: "We're pioneering the future landscape with a commitment to innovation and sustainability, crafting groundbreaking solutions that not only address current challenges but also lay the foundation for a more resilient and harmonious tomorrow.",
    image: construction,
    icon: faBuilding,
  },
  {
    title: "Security",
    desc: "Providing unparalleled peace of mind through our cutting-edge protection services, where safety is not just a priority but a guarantee. With advanced technology and expert personnel, we're dedicated to safeguarding what matters most, ensuring a secure environment for individuals and communities alike.",
    image: security,
    icon: faLock,
  },
];

export default data;

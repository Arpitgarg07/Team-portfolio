// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to our 3D portfolio, showcasing KOD KALAKAR's! 
        With expertise in design, development, and problem-solving,
         we craft impactful solutions for real-world challenges. 
         Our mission is to push tech boundaries, continuously grow, 
         and excel in every competition. Together, we innovate and 
         collaborate to make a difference! 📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://github.com/Arpitgarg07/">Arpit Garg</a>
        </li>
        <li>
          <a href="https://github.com/jainhardik06/">Hardik Jain</a>
        </li>
        <li>
          <a href="https://github.com/prakriti0803/">prakriti</a>
        </li>
        <li>
          <a href="https://github.com/Vikhyat-agrawal/">Vikhyat agrawal</a>
        </li>
        {/* <li>
          <a href="https://streakbyte.com">Streak Byte</a>
        </li> */}
        <li>
          <a href="https://github.com/kodkalakarjeet">
            More Credits
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;

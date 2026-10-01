export type CourseLesson = {
  id: string;
  title: string;
  duration: string;
};

export type CourseDetail = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  level: string;
  rating: number;
  reviewCount: number;
  students: number;
  price: number;
  totalLessons: number;
  totalHours: number;
  moreVideos: number;
  previewImage: string;
  sneakPeaks: string[];
  description: string[];
  keyPoints: string[];
  includes: {
    label: string;
    icon: "resources" | "videos" | "certificate" | "consultation";
  }[];
  lessons: CourseLesson[];
};

const digitalAssetCourse: CourseDetail = {
  id: "2",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  authorRole: "Professional Creator",
  authorAvatar: "/images/creators/purepearl.jpg",
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  students: 199,
  price: 25,
  totalLessons: 112,
  totalHours: 24,
  moreVideos: 99,
  previewImage: "/images/courses/digital-asset-preview.jpg",
  sneakPeaks: [
    "/images/courses/sneak-1.jpg",
    "/images/courses/sneak-2.jpg",
    "/images/courses/sneak-3.jpg",
    "/images/courses/sneak-4.jpg",
  ],
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  includes: [
    { label: "Learning Resources", icon: "resources" },
    { label: "Quality Lesson Videos", icon: "videos" },
    { label: "Certificate of Completion", icon: "certificate" },
    { label: "Private Consultation", icon: "consultation" },
  ],
  lessons: [
    { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    {
      id: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ],
};

/** Expand this map as you add more detail pages */
const courseDetailsById: Record<string, CourseDetail> = {
  "2": digitalAssetCourse,
  // fallback demo so other card links still work
  "1": { ...digitalAssetCourse, id: "1", title: "Learn Figma from Basic" },
  "3": { ...digitalAssetCourse, id: "3", title: "the Power of Big Data" },
};

export function getCourseById(id: string): CourseDetail | undefined {
  return (
    courseDetailsById[id] ?? {
      ...digitalAssetCourse,
      id,
    }
  );
}

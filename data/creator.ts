import type { CourseDetail } from "./course-details";

export type CreatorProfile = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  productCount: number;
  followerCount: number;
  courses: {
    id: string;
    title: string;
    author: string;
    image: string;
    rating: number;
    level: string;
    students: number;
    price: number;
    category: string;
    lessonsCount?: number;
    hoursCount?: number;
    commentsCount?: number;
  }[];
};

export const mockCreator: CreatorProfile = {
  id: "purepearl-studio",
  name: "PurePearl Studio",
  role: "Passionate UI/UX, Web designer",
  avatar: "/images/creators/purepearl.jpg",
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  productCount: 3,
  followerCount: 12,
  courses: [
    {
      id: "1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      image: "/images/courses/sneak-1.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Design",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
    {
      id: "2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      image: "/images/courses/sneak-2.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Design",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
    {
      id: "3",
      title: "the Power of Big Data",
      author: "purepearl studio",
      image: "/images/courses/sneak-3.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Development",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
    {
      id: "4",
      title: "Balancing Productivity an...",
      author: "purepearl studio",
      image: "/images/courses/sneak-4.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Business",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
    {
      id: "5",
      title: "Mastering Money Manage...",
      author: "purepearl studio",
      image: "/images/courses/sneak-1.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Finance",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
    {
      id: "6",
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      image: "/images/courses/sneak-2.png",
      rating: 4.5,
      level: "Beginner",
      students: 199,
      price: 25,
      category: "Business",
      lessonsCount: 17,
      hoursCount: 2,
      commentsCount: 99,
    },
  ],
};

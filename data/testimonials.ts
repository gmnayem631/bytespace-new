export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/images/testimonials/sarah-m.png",
    avatarAlt: "Portrait of Sarah M.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/images/testimonials/james-l.png",
    avatarAlt: "Portrait of James L.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/images/testimonials/alex-b.png",
    avatarAlt: "Portrait of Alex B.",
  },
];

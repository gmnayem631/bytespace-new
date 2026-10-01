import { CourseCatalog } from "@/components/CourseCatalog/CourseCatalog";
import { CoursesHero } from "@/components/CoursesHero/CoursesHero";
import React from "react";

const page = () => {
  return (
    <div>
      <CoursesHero />
      <CourseCatalog />
    </div>
  );
};

export default page;

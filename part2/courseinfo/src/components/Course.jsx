import React from "react";
import Header from "./Header";
import Content from "./Content";
import TotalExercises from "./TotalExercises";

function Course({ course }) {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <TotalExercises course={course} />
    </div>
  );
}

export default Course;

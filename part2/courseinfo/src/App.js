import React from "react";
import Course from "./components/Course";
import { courses } from "./components/Courses";

const App = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course, index) => {
        return <Course key={index} course={course} />;
      })}
    </div>
  );
};
export default App;

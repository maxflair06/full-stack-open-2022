const TotalExercises = ({ course }) => {
  const total = course.parts.reduce((sum, exercise) => {
    return sum + exercise.exercises;
  }, 0);
  return <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>;
};

export default TotalExercises;

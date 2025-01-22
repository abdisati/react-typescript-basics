import { useState } from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  interface CourseGoal {
    title: string;
    description: string;
    id: number;
  }

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Learn React + Ts",
        id: Math.random(),
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>My Learning Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

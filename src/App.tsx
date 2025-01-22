import CourseGoal from "./components/CourseGoal.tsx";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + Ts">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}

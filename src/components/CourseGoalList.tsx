import { ICourseGoal } from "../App";
import CourseGoal from "./CourseGoal";
interface CourseGoalListProps {
  goals: ICourseGoal[];
}

const CourseGoalList: React.FC<CourseGoalListProps> = (props) => {
  const { goals } = props;
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

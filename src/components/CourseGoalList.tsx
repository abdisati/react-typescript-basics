import { ICourseGoal } from "../App";
import CourseGoal from "./CourseGoal";
interface CourseGoalListProps {
  goals: ICourseGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = (props) => {
  const { goals, onDeleteGoal } = props;
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title={goal.title}
            onDeleteGoal={onDeleteGoal}
            id={goal.id}
          >
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

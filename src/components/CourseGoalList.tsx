import { ICourseGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
interface CourseGoalListProps {
  goals: ICourseGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = (props) => {
  const { goals, onDeleteGoal } = props;
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: React.ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalList;

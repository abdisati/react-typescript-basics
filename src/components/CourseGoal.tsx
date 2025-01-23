import React from "react";

interface CourseGoalProps {
  title: string;
  children: React.ReactNode;
  onDeleteGoal: (id: number) => void;
  id: number;
}

export default function CourseGoal(props: CourseGoalProps): JSX.Element {
  const { title, children, onDeleteGoal, id } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
}

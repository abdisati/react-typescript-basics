import React from "react";

interface CourseGoalProps {
  title: string;
  children: React.ReactNode;
}

export default function CourseGoal(props: CourseGoalProps): JSX.Element {
  const { title, children } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

export default function CourseGoal(props: {
  title: string;
  description: string;
}): JSX.Element {
  const { title, description } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

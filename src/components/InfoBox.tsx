interface InfoBoxProps {
  mode: "hint" | "warning";
  children: React.ReactNode;
}

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="infobox infobox-warning--medium">
      <h2>warning</h2>
      <p>{children}</p>
    </aside>
  );
}

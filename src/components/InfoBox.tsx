interface InfoBoxProps {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children, severity } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      <p>{children}</p>
    </aside>
  );
}

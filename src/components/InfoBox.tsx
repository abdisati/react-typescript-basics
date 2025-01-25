type HintBoxProps = {
  mode: "hint";
  children: React.ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;
export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      <p>{children}</p>
    </aside>
  );
}

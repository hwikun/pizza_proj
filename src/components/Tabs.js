import "./Tabs.css";

export function Tab({ active, children }) {
  return <div className={active ? "active" : ""}>{children}</div>;
}

export function Tabs({ children }) {
  return <div className="Tabs">{children}</div>;
}

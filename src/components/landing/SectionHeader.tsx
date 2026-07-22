type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  action?: React.ReactNode;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  variant = "light",
  action,
}: SectionHeaderProps) {
  const centered = align === "center";
  const dark = variant === "dark";

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        centered ? "items-center text-center sm:flex-col sm:items-center" : ""
      }`}
    >
      <div className={centered ? "flex flex-col items-center" : ""}>
        <p className={dark ? "text-sm font-semibold uppercase tracking-wider text-violet-400" : "section-label"}>
          {label}
        </p>
        <h2
          className={
            dark
              ? "mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              : "section-title mt-2"
          }
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`section-subtitle ${centered ? "mx-auto" : ""} ${dark ? "text-stone-400" : ""}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

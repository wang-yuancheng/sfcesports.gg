export default function FlagIcon({
  code,
  width = 22,
  className = "border border-gray-200",
}: {
  code?: string;
  width?: number;
  className?: string;
}) {
  if (!code) return null;
  const c = code.toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/${c}.svg`}
      alt={code}
      width={width}
      style={{ height: "auto" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

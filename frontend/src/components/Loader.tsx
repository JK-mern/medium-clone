import { Loader2 } from "lucide-react";

export default function Loader({
  size = "default",
  color = "primary",
}: {
  size?: "small" | "default" | "large";
  color?: "primary" | "secondary" | "muted";
}) {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      />
    </div>
  );
}

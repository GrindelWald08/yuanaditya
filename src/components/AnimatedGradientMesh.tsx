import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export const AnimatedGradientMesh = ({ className, variant = "primary" }: AnimatedGradientMeshProps) => {
  const gradientColors = {
    primary: "from-primary/20 via-primary/5 to-transparent",
    secondary: "from-secondary/20 via-accent/10 to-transparent",
    accent: "from-accent/15 via-primary/10 to-transparent",
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Gradient blob 1 */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-60 animate-[float_20s_ease-in-out_infinite]",
          `bg-gradient-to-br ${gradientColors[variant]}`
        )}
        style={{
          top: "10%",
          left: "10%",
        }}
      />
      {/* Gradient blob 2 */}
      <div
        className={cn(
          "absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-40 animate-[float_25s_ease-in-out_infinite_reverse]",
          `bg-gradient-to-tr ${gradientColors[variant]}`
        )}
        style={{
          top: "50%",
          right: "10%",
        }}
      />
      {/* Gradient blob 3 */}
      <div
        className={cn(
          "absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-50 animate-[float_18s_ease-in-out_infinite]",
          `bg-gradient-to-bl ${gradientColors[variant]}`
        )}
        style={{
          bottom: "20%",
          left: "30%",
          animationDelay: "-5s",
        }}
      />
    </div>
  );
};

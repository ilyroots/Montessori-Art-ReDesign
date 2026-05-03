import Link from "next/link";
import { Lightbulb, BookOpen, Palette, Baby } from "lucide-react";

interface BlogCalloutProps {
  variant: "tip" | "material" | "montessori" | "age";
  title?: string;
  children: React.ReactNode;
}

const variantStyles = {
  tip: {
    border: "border-ochre/30",
    bg: "bg-ochre/5",
    icon: <Lightbulb size={18} className="text-ochre" />,
    defaultTitle: "Teaching Tip",
  },
  material: {
    border: "border-terracotta/30",
    bg: "bg-terracotta/5",
    icon: <Palette size={18} className="text-terracotta" />,
    defaultTitle: "Materials Needed",
  },
  montessori: {
    border: "border-sage/30",
    bg: "bg-sage/5",
    icon: <BookOpen size={18} className="text-sage" />,
    defaultTitle: "Montessori Note",
  },
  age: {
    border: "border-dusty-blue/30",
    bg: "bg-dusty-blue/5",
    icon: <Baby size={18} className="text-dusty-blue" />,
    defaultTitle: "Age Range",
  },
};

export function BlogCallout({ variant, title, children }: BlogCalloutProps) {
  const style = variantStyles[variant];
  return (
    <div className={`my-8 rounded-card border ${style.border} ${style.bg} p-5 sm:p-6`}>
      <div className="flex items-center gap-2 mb-3">
        {style.icon}
        <span className="text-xs uppercase tracking-wider font-semibold text-espresso/70">
          {title || style.defaultTitle}
        </span>
      </div>
      <div className="text-sm text-charcoal/80 leading-relaxed">{children}</div>
    </div>
  );
}

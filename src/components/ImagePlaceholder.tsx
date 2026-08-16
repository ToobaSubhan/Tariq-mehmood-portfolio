interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded-sm aspect-video ${className}`}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      <div className="text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-2 font-mono text-[10px] text-muted-foreground/50">
          [Image pending]
        </div>
      </div>
    </div>
  );
}

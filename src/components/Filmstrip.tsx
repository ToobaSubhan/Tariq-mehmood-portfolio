export function StitchDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-12 w-full flex items-center justify-center ${className}`}
      style={{
        borderTop: "1px solid var(--film)",
        borderBottom: "1px solid var(--film)",
        background: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          var(--gold) 2px,
          var(--gold) 4px
        )`,
        opacity: 0.3,
      }}
    />
  );
}

// Legacy export for backwards compatibility
export function Filmstrip({ className = "" }: { className?: string }) {
  return <StitchDivider className={className} />;
}
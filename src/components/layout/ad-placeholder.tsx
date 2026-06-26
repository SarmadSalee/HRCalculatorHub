export function AdPlaceholder({ id, className = "" }: { id: string; className?: string }) {
  return (
    <div
      id={id}
      className={`w-full p-4 bg-muted rounded-lg text-center text-sm text-muted-foreground ${className}`}
    >
      Advertisement
    </div>
  );
}
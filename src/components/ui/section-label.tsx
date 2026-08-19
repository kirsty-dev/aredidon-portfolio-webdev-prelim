type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8]">
      {children}
    </p>
  );
}
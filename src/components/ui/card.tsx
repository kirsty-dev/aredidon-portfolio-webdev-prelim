type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl text-indigo-600">
          {icon}
        </div>
      )}
      <h2 className="mb-2 text-xl font-bold text-slate-900">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default Card;
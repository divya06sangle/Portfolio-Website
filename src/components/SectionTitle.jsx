function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="text-center mb-20">

      {subtitle && (
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide mb-5">
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mt-6"></div>

      {description && (
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;
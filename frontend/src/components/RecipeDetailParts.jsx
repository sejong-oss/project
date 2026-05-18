export const RecipeSectionTitle = ({ children, meta, action }) => (
    <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">{children}</h2>
        {meta && <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500">{meta}</span>}
        {action}
    </div>
);

export const RecipeStat = ({ label, value, Icon }) => (
    <div className="flex-1 rounded-btn bg-gray-50 px-2.5 py-3 text-center">
        <div className="flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {Icon && <Icon size={13} />}
            {label}
        </div>
        <div className="mt-1 text-base font-bold text-gray-900">{value}</div>
    </div>
);

export const RecipeStepRow = ({ index, children }) => (
    <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-3 border-b border-gray-200 py-4 last:border-b-0">
        <span className="inline-flex h-6 w-12 shrink-0 items-center justify-center rounded-btn bg-gray-900 text-xs font-extrabold text-white">
            {String(index).padStart(2, "0")}
        </span>
        <p className="min-w-0 text-sm leading-6 text-gray-700 md:text-base">{children}</p>
    </div>
);

const alignmentClasses = {
  center: 'mx-auto text-center items-center',
  left: 'text-left items-start',
  right: 'ml-auto text-right items-end',
}

const toneClasses = {
  dark: {
    eyebrow: 'text-secondary-500',
    title: 'text-neutral-900',
    description: 'text-neutral-600',
  },
  light: {
    eyebrow: 'text-secondary-200/80',
    title: 'text-white',
    description: 'text-neutral-100/90',
  },
}

export function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'dark' }) {
  const alignment = alignmentClasses[align] ?? alignmentClasses.center
  const palette = toneClasses[tone] ?? toneClasses.dark

  return (
    <div className={`flex max-w-3xl flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${palette.eyebrow}`}>{eyebrow}</span>
      )}
      <h2 className={`text-3xl font-semibold sm:text-4xl ${palette.title}`}>{title}</h2>
      {description && <p className={`text-base leading-relaxed ${palette.description}`}>{description}</p>}
    </div>
  )}

import { GLOBAL } from '../lib/global.js'

export function Footer() {
  const { brand, socials } = GLOBAL

  return (
    <footer className="bg-neutral-900 py-12 text-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
          <p className="text-sm text-neutral-400">ACONE Assessoria e Consultoria Empresarial Ltda.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary-300 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-neutral-800 px-6 pt-6 text-xs text-neutral-500 sm:px-10">
        © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}

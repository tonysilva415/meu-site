import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { GLOBAL } from '../lib/global.js'

const { brand, navigation, cta } = GLOBAL

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isInternal = (href = '') => href.startsWith('/')

  const closeMobileMenu = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/#inicio" className="flex items-center gap-3">
          <img src={brand.logo} alt={`${brand.name} logotipo`} className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
              Gestão em Saúde
            </span>
            <span className="text-lg font-semibold text-neutral-900">{brand.name}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
          {navigation.map((item) => {
            if (item.children?.length) {
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onFocus={() => setOpenDropdown(item.label)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenDropdown(null)
                      }
                    }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                    className="flex items-center gap-1 rounded-full px-3 py-1 transition-colors hover:bg-neutral-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {item.label}
                    <FiChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.label && (
                    <div
                      className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-neutral-100 bg-white p-4 shadow-lg"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="absolute -top-2 left-8 h-4 w-4 rotate-45 border-l border-t border-neutral-100 bg-white" />
                      <ul className="flex flex-col gap-3 text-sm text-neutral-600">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            {isInternal(child.href) ? (
                              <Link
                                to={child.href}
                                className="block rounded-xl px-3 py-2 transition hover:bg-neutral-50 hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            ) : (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-xl px-3 py-2 transition hover:bg-neutral-50 hover:text-primary"
                              >
                                {child.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            }

            if (!item.href) {
              return null
            }

            return isInternal(item.href) ? (
              <Link key={item.label} to={item.href} className="rounded-full px-3 py-1 transition-colors hover:bg-neutral-50 hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isInternal(cta.secondary.href) ? (
            <Link to={cta.secondary.href} className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              {cta.secondary.label}
            </Link>
          ) : (
            <a href={cta.secondary.href} className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              {cta.secondary.label}
            </a>
          )}
          {isInternal(cta.primary.href) ? (
            <Link
              to={cta.primary.href}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
            >
              {cta.primary.label}
            </Link>
          ) : (
            <a
              href={cta.primary.href}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-600"
            >
              {cta.primary.label}
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-primary hover:text-primary md:hidden"
          aria-label="Abrir menu"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm md:hidden"
          />
          <aside className="fixed inset-y-0 right-0 z-50 flex h-screen w-80 flex-col gap-6 overflow-y-auto bg-neutral-50 p-6 shadow-xl md:hidden">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Menu</span>
              <button
                type="button"
                onClick={() => closeMobileMenu()}
                aria-label="Fechar menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 transition hover:text-primary"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 text-sm font-medium text-neutral-700">
              {navigation.map((item) => {
                if (item.children?.length) {
                  return (
                    <div key={item.label} className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-2 rounded-2xl border border-neutral-100 bg-neutral-50 p-3">
                        {item.children.map((child) =>
                          isInternal(child.href) ? (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => closeMobileMenu()}
                              className="rounded-xl px-3 py-2 text-sm text-neutral-700 transition hover:bg-white hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => closeMobileMenu()}
                              className="rounded-xl px-3 py-2 text-sm text-neutral-700 transition hover:bg-white hover:text-primary"
                            >
                              {child.label}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  )
                }

                if (!item.href) {
                  return null
                }

                return isInternal(item.href) ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => closeMobileMenu()}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => closeMobileMenu()}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              {isInternal(cta.secondary.href) ? (
                <Link
                  to={cta.secondary.href}
                  onClick={() => closeMobileMenu()}
                  className="rounded-full border border-primary px-5 py-2 text-center text-sm font-semibold text-primary"
                >
                  {cta.secondary.label}
                </Link>
              ) : (
                <a
                  href={cta.secondary.href}
                  onClick={() => closeMobileMenu()}
                  className="rounded-full border border-primary px-5 py-2 text-center text-sm font-semibold text-primary"
                >
                  {cta.secondary.label}
                </a>
              )}
              {isInternal(cta.primary.href) ? (
                <Link
                  to={cta.primary.href}
                  onClick={() => closeMobileMenu()}
                  className="rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground shadow"
                >
                  {cta.primary.label}
                </Link>
              ) : (
                <a
                  href={cta.primary.href}
                  onClick={() => closeMobileMenu()}
                  className="rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground shadow"
                >
                  {cta.primary.label}
                </a>
              )}
            </div>
          </aside>
        </>
      )}
    </header>
  )
}

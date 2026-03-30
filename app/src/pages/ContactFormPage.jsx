import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiSend, FiAlertCircle, FiMessageSquare, FiShield, FiX } from 'react-icons/fi'
import { contactFormPage } from '../content/sections.js'
import { Reveal } from '../components/Reveal.jsx'

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { a, b, answer: a + b }
}

export function ContactFormPage() {
  const [selectedType, setSelectedType] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captchaAnswer: '',
  })
  const [captcha, setCaptcha] = useState(() => generateCaptcha())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccessAlert])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedType) {
      setSubmitStatus({ type: 'error', message: 'Selecione o tipo de mensagem' })
      return
    }

    if (captcha.answer !== Number(formData.captchaAnswer)) {
      setSubmitStatus({ type: 'error', message: 'Validação incorreta. Tente novamente.' })
      setCaptcha(generateCaptcha())
      setFormData((prev) => ({ ...prev, captchaAnswer: '' }))
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: selectedType,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          captchaAnswer: Number(formData.captchaAnswer),
          captchaValue: captcha.answer,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setSubmitStatus({ type: 'success', message: contactFormPage.form.successMessage })
      setShowSuccessAlert(true)
      setFormData({ name: '', email: '', message: '', captchaAnswer: '' })
      setSelectedType(null)
      setCaptcha(generateCaptcha())
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || contactFormPage.form.errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus) setSubmitStatus(null)
  }

  return (
    <>
      {showSuccessAlert && (
        <div className="fixed top-20 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-out">
          <div className="mx-auto flex max-w-md items-center gap-4 rounded-2xl border-2 border-success/30 bg-success px-6 py-4 shadow-xl">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
              <FiCheck className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Mensagem enviada com sucesso!</p>
              <p className="text-xs text-white/90">Entraremos em contato em breve.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowSuccessAlert(false)}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
              aria-label="Fechar alerta"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 sm:px-10">
          <Reveal className="max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{contactFormPage.hero.title}</h1>
            <p className="text-lg text-neutral-100">{contactFormPage.hero.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
          <Reveal className="mb-12">
            <h2 className="mb-4 text-center text-2xl font-semibold text-neutral-900">Selecione o tipo de mensagem</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactFormPage.messageTypes.map((type) => {
                const Icon = type.id === 'comunicacao' ? FiMessageSquare : FiShield
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      setSelectedType(type.id)
                      setSubmitStatus(null)
                    }}
                    className={`group relative flex flex-col gap-3 rounded-3xl border-2 p-6 text-left transition-all ${
                      selectedType === type.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-neutral-200 bg-white hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    {selectedType === type.id && (
                      <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow">
                        <FiCheck className="h-5 w-5" />
                      </span>
                    )}
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900">{type.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{type.description}</p>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {selectedType && (
            <Reveal>
              <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
                <div className="mb-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-neutral-700">
                        {contactFormPage.form.nameLabel}
                        <span className="ml-1 text-xs font-normal text-neutral-500">(opcional)</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder={contactFormPage.form.namePlaceholder}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-neutral-700">
                        {contactFormPage.form.emailLabel}
                        <span className="ml-1 text-xs font-normal text-neutral-500">(opcional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={contactFormPage.form.emailPlaceholder}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-neutral-700">
                      {contactFormPage.form.messageLabel} <span className="text-danger-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={contactFormPage.form.messagePlaceholder}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <span className="text-sm font-semibold text-neutral-700">
                      {captcha.a} + {captcha.b} =
                    </span>
                    <input
                      type="number"
                      required
                      value={formData.captchaAnswer}
                      onChange={(e) => handleInputChange('captchaAnswer', e.target.value)}
                      placeholder="?"
                      className="w-20 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-center text-sm font-semibold focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {submitStatus && (
                  <div
                    className={`mb-6 flex items-start gap-3 rounded-xl border p-4 ${
                      submitStatus.type === 'success'
                        ? 'border-success/20 bg-success/10 text-neutral-700'
                        : 'border-danger/20 bg-danger/10 text-neutral-700'
                    }`}
                  >
                    <FiAlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {contactFormPage.form.submittingLabel}
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" />
                      {contactFormPage.form.submitLabel}
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 py-20 text-primary-foreground">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 sm:px-10">
          <Reveal className="max-w-2xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-200/80">Pronto para mudar?</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Queremos ajudar você a transformar a gestão de saúde do seu município.
            </h2>
            <Link
              to="/#contato"
              className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 hover:border-white/50"
            >
              Entrar em contato
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}


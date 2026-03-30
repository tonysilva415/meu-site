import { FiLoader } from 'react-icons/fi'

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-primary-200" />
          <FiLoader className="absolute inset-0 m-auto h-8 w-8 animate-spin text-primary-600" />
        </div>
        <p className="text-sm font-medium text-neutral-600">Carregando...</p>
      </div>
    </div>
  )
}


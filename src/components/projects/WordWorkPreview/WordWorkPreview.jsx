import { CheckCheck, Search, Users } from 'lucide-react'

const conversations = [
  { initials: 'AM', name: 'Ana Martínez', message: 'Perfecto, lo reviso ahora.' },
  { initials: 'EP', name: 'Equipo Producto', message: 'Nueva actualización disponible' },
  { initials: 'LS', name: 'Lucas Silva', message: '¡Gracias por la ayuda!' },
]

function WordWorkPreview() {
  return (
    <div className="relative min-h-96 overflow-hidden rounded-[20px] border border-border bg-background text-foreground shadow-card transition-colors duration-200">
      <div className="flex h-14 items-center justify-between border-b border-border bg-surface px-5 transition-colors duration-200">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-[10px] bg-primary text-sm font-bold">W</span>
          <span className="font-semibold tracking-tight">WordWork</span>
        </div>
        <Search size={17} className="text-subtle" aria-hidden="true" />
      </div>

      <div className="grid min-h-[300px] grid-cols-1 sm:min-h-[328px] sm:grid-cols-[minmax(150px,0.8fr)_1.4fr]">
        <div className="hidden border-r border-border bg-surface p-4 transition-colors duration-200 sm:block">
          <div className="mb-4 flex items-center justify-between px-1">
            <span className="text-xs font-medium text-muted">Conversaciones</span>
            <Users size={15} className="text-subtle" aria-hidden="true" />
          </div>
          <div className="space-y-1.5">
            {conversations.map((conversation, index) => (
              <div className={`flex items-center gap-2.5 rounded-xl p-2.5 ${index === 1 ? 'bg-surface-hover' : ''}`} key={conversation.name}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-[10px] font-semibold text-white">
                  {conversation.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium">{conversation.name}</p>
                  <p className="mt-0.5 hidden truncate text-[10px] text-subtle sm:block">{conversation.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-border bg-surface px-4 py-3 transition-colors duration-200">
            <p className="text-xs font-medium">Equipo Producto</p>
            <p className="mt-0.5 text-[10px] font-medium text-success-readable">5 integrantes activos</p>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2.5 p-3 min-[360px]:p-4">
            <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-surface-hover px-3 py-2.5 text-[11px] text-muted">
              Ya está lista la nueva versión del proyecto.
            </div>
            <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-primary px-3 py-2.5 text-[11px] text-white">
              Excelente, la revisamos esta tarde.
              <CheckCheck size={12} className="ml-auto mt-1 text-sky-200" aria-label="Mensaje leído" />
            </div>
            <div className="mt-2 h-10 rounded-xl border border-border bg-surface px-3 text-[10px] leading-10 text-subtle transition-colors duration-200">
              Escribir un mensaje...
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-primary/15 blur-3xl" />
    </div>
  )
}

export default WordWorkPreview

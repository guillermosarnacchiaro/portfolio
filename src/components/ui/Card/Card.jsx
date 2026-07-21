function Card({ as: Component = 'article', className = '', children }) {
  return (
    <Component className={`rounded-card border border-border bg-surface p-6 shadow-card transition-[transform,box-shadow,background-color] duration-250 ease-standard motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card-hover sm:p-8 ${className}`}>
      {children}
    </Component>
  )
}

export default Card

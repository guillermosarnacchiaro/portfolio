function Container({ as: Component = 'div', className = '', children }) {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
}

export default Container

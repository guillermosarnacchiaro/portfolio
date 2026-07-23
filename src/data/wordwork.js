import { MailCheck, MessageCircle, Moon, ShieldCheck, Smartphone, Users } from 'lucide-react'

export const wordworkScreens = [
  {
    id: 'login',
    title: 'Inicio de sesión',
    description: 'Acceso seguro a la plataforma.',
    image: '/projects/wordwork/login.png',
  },
  {
    id: 'register',
    title: 'Registro',
    description: 'Creación de una cuenta nueva en WordWork.',
    image: '/projects/wordwork/registro.png',
  },
  {
    id: 'recovery',
    title: 'Recuperación de cuenta',
    description: 'Flujo seguro para restablecer el acceso.',
    image: '/projects/wordwork/recuperacion.png',
  },
  {
    id: 'responsive',
    title: 'Vista responsive',
    description: 'La experiencia de acceso adaptada a dispositivos móviles.',
    image: '/projects/wordwork/responsive.png',
  },
]

export const wordworkFeatures = [
  { title: 'Autenticación', description: 'Registro, inicio de sesión y sesiones protegidas con JWT.', icon: ShieldCheck },
  { title: 'Verificación por email', description: 'Activación de cuenta y recuperación segura de contraseña.', icon: MailCheck },
  { title: 'Chats privados', description: 'Conversaciones individuales con entrega y lectura.', icon: MessageCircle },
  { title: 'Grupos', description: 'Creación de grupos de trabajo y administración de integrantes.', icon: Users },
  { title: 'Modo oscuro', description: 'Interfaz adaptable al tema elegido por el usuario.', icon: Moon },
  { title: 'Diseño responsive', description: 'Experiencia optimizada para escritorio, tablet y teléfono.', icon: Smartphone },
]

export const architectureItems = [
  { name: 'React', detail: 'Interfaz y estado' },
  { name: 'API REST', detail: 'Rutas y controladores' },
  { name: 'Servicios', detail: 'Lógica de negocio' },
  { name: 'Repositorios', detail: 'Acceso a datos' },
  { name: 'MongoDB', detail: 'Persistencia' },
]

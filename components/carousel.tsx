import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './EmblaCarousel'


const SLIDES = [
  {
    id: 1,
    url: "/CarruselInferiorMain/azul.webp", // Reemplaza con tus rutas reales
    alt: "Descripción imagen 1"
  },
  {
    id: 2,
    url: "/CarruselInferiorMain/brazos.webp", // Reemplaza con tus rutas reales
    alt: "Descripción imagen 2"
  },
  {
    id: 3,
    url: "/CarruselInferiorMain/cruzado.webp", // Reemplaza con tus rutas reales

    alt: "Descripción imagen 3"
  },
  {
    id: 4,
    
    url: "/CarruselInferiorMain/abuela.webp", // Reemplaza con tus rutas reales

    alt: "Descripción imagen 4"
  },
  
]

const OPTIONS: EmblaOptionsType = {
  axis: 'y',
  align: 'end',
  dragFree: true,
  direction: 'rtl',
  loop: true
}

const AppCaro: React.FC = () => (
  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
)

export default AppCaro
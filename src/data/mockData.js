import ataque from '../assets/images/01_ataque_titanes.jpg'
import laRepublica from '../assets/images/02_la_republica.jpg'
import aristoteles from '../assets/images/03_aristoteles.jpg'
import meditaciones from '../assets/images/04_meditaciones.jpg'
import laCiudadDeDios from '../assets/images/05_la_ciudad_de_dios.jpg'
import sumaTeologica from '../assets/images/06_suma_teologica.jpg'
import elPrincipe from '../assets/images/07_el_principe.jpg'
import discursoDelMetodo from '../assets/images/08_discurso_del_metodo.jpg'
import leviatan from '../assets/images/09_leviatan.jpg'
import ensayoEntendimientoHumano from '../assets/images/10_ensayo_entendimiento_humano.jpg'
import criticaDeLaRazonPura from '../assets/images/11_critica_de_la_razon_pura.jpg'
import asiHabloZaratustra from '../assets/images/12_asi_hablo_zaratustra.jpg'
import elSerYlaNada from '../assets/images/13_el_ser_y_la_nada.jpg'
import teoriaDeLaJusticia from '../assets/images/14_teoria_de_la_justicia.jpg'
import laCondicionHumana from '../assets/images/15_la_condicion_humana.jpg'

const libros = [
  {
    "nombre": "Ataque a los titanes",
    "autor": "Hajime Isayama",
    "añoPublicacion": 2009,
    "isbn10": "1234560001",
    "isbn13": "978-1234560001",
    "imagenPortada": ataque,
    "sinopsis": "En un mundo asediado por gigantes devoradores de humanos, la humanidad lucha por sobrevivir tras muros colosales.",
    "criticas": ["Narrativa intensa y oscura", "Personajes con gran desarrollo emocional"],
    "popular": true
  },
  {
    "nombre": "La República",
    "autor": "Platón",
    "añoPublicacion": -380,
    "isbn10": "1234560002",
    "isbn13": "978-1234560002",
    "imagenPortada": laRepublica,
    "sinopsis": "Diálogo filosófico que explora la justicia, el estado ideal y la naturaleza del conocimiento.",
    "criticas": ["Fundación de la filosofía política", "Estructura dialógica apasionante"],
    "popular": true
  },
  {
    "nombre": "Ética a Nicómaco",
    "autor": "Aristóteles",
    "añoPublicacion": -350,
    "isbn10": "1234560003",
    "isbn13": "978-1234560003",
    "imagenPortada": aristoteles,
    "sinopsis": "Tratado ético centrado en la virtud y el camino hacia la felicidad humana (eudaimonía).",
    "criticas": ["Ética práctica aún vigente", "Rigor filosófico impecable"],
    "popular": false
  },
  {
    "nombre": "Meditaciones",
    "autor": "Marco Aurelio",
    "añoPublicacion": 180,
    "isbn10": "1234560004",
    "isbn13": "978-1234560004",
    "imagenPortada": meditaciones,
    "sinopsis": "Reflexiones personales de un emperador estoico sobre la vida, la muerte y la virtud.",
    "criticas": ["Profunda guía espiritual", "Sabiduría estoica atemporal"],
    "popular": false
  },
  {
    "nombre": "La ciudad de Dios",
    "autor": "Agustín de Hipona",
    "añoPublicacion": 426,
    "isbn10": "1234560005",
    "isbn13": "978-1234560005",
    "imagenPortada": laCiudadDeDios,
    "sinopsis": "Defensa del cristianismo frente al paganismo y reflexión sobre la relación entre ciudad terrenal y la divina.",
    "criticas": ["Base del pensamiento teológico", "Complejo y profundo"],
    "popular": false
  },
  {
    "nombre": "Suma Teológica",
    "autor": "Tomás de Aquino",
    "añoPublicacion": 1274,
    "isbn10": "1234560006",
    "isbn13": "978-1234560006",
    "imagenPortada": sumaTeologica,
    "sinopsis": "Compendio teológico sistemático que aglutina filosofía y fe cristiana.",
    "criticas": ["Monumento del escolasticismo", "Rigor teológico colosal"],
    "popular": false
  },
  {
    "nombre": "El Príncipe",
    "autor": "Nicolás Maquiavelo",
    "añoPublicacion": 1532,
    "isbn10": "1234560007",
    "isbn13": "978-1234560007",
    "imagenPortada": elPrincipe,
    "sinopsis": "Manual político pragmático sobre el poder, el liderazgo y la conservación del Estado.",
    "criticas": ["Realismo político impactante", "Influyente y polémico"],
    "popular": false
  },
  {
    "nombre": "Discurso del Método",
    "autor": "René Descartes",
    "añoPublicacion": 1637,
    "isbn10": "1234560008",
    "isbn13": "978-1234560008",
    "imagenPortada": discursoDelMetodo,
    "sinopsis": "Texto clave del racionalismo, donde Descartes expone su método de duda y el famoso 'pienso, luego existo'.",
    "criticas": ["Revolución epistemológica", "Claridad y reflexión profunda"],
    "popular": true
  },
  {
    "nombre": "Leviatán",
    "autor": "Thomas Hobbes",
    "añoPublicacion": 1651,
    "isbn10": "1234560009",
    "isbn13": "978-1234560009",
    "imagenPortada": leviatan,
    "sinopsis": "Tratado político que justifica un poder soberano supremo para evitar el estado de naturaleza.",
    "criticas": ["base del contrato social", "visión austera del hombre"],
    "popular": true
  },
  {
    "nombre": "Ensayo sobre el entendimiento humano",
    "autor": "John Locke",
    "añoPublicacion": 1689,
    "isbn10": "1234560010",
    "isbn13": "978-1234560010",
    "imagenPortada": ensayoEntendimientoHumano,
    "sinopsis": "Exploración del origen, límites y alcance del conocimiento humano.",
    "criticas": ["Pilar del empirismo", "Influyente en filosofía moderna"],
    "popular": false
  },
  {
    "nombre": "Crítica de la razón pura",
    "autor": "Immanuel Kant",
    "añoPublicacion": 1781,
    "isbn10": "1234560011",
    "isbn13": "978-1234560011",
    "imagenPortada": criticaDeLaRazonPura,
    "sinopsis": "Obra fundamental que investiga la relación entre experiencia y conocimiento a priori.",
    "criticas": ["Compleja y fundamental", "Base de la filosofía trascendental"],
    "popular": false
  },
  {
    "nombre": "Así habló Zaratustra",
    "autor": "Friedrich Nietzsche",
    "añoPublicacion": 1883,
    "isbn10": "1234560012",
    "isbn13": "978-1234560012",
    "imagenPortada": asiHabloZaratustra,
    "sinopsis": "Prosa poética y filosofía que introduce al superhombre y la muerte de Dios.",
    "criticas": ["Estilísticamente rompedor", "Provocativo y visionario"],
    "popular": false
  },
  {
    "nombre": "El ser y la nada",
    "autor": "Jean-Paul Sartre",
    "añoPublicacion": 1943,
    "isbn10": "1234560013",
    "isbn13": "978-1234560013",
    "imagenPortada": elSerYlaNada,
    "sinopsis": "Tratado existencialista sobre la libertad, la conciencia y la nada.",
    "criticas": ["Exposición profunda del existencialismo", "Denso y desafiante"],
    "popular": false
  },
  {
    "nombre": "Teoría de la justicia",
    "autor": "John Rawls",
    "añoPublicacion": 1971,
    "isbn10": "1234560014",
    "isbn13": "978-1234560014",
    "imagenPortada": teoriaDeLaJusticia,
    "sinopsis": "El autor propone un enfoque de justicia basado en el velo de ignorancia y el contrato social moderno.",
    "criticas": ["Revolución en filosofía política", "Clara y equilibrada"],
    "popular": false
  },
  {
    "nombre": "La condición humana",
    "autor": "Hannah Arendt",
    "añoPublicacion": 1958,
    "isbn10": "1234560015",
    "isbn13": "978-1234560015",
    "imagenPortada": laCondicionHumana,
    "sinopsis": "Reflexión sobre la acción, la política, el trabajo y la vida activa en la modernidad.",
    "criticas": ["Análisis agudo de la vida pública", "Influyente en teoría política"],
    "popular": false
  }
];

export default libros;

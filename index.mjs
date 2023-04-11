import { stringsAreSimilar } from "./similarities.mjs"

// Mnesajes admitidos
const messages = [
    {
        input: "¿Hola, qué tal?",
        answer: "¡Estoy bien! Muchas gracias"
    },
    {
        input: "¿Cómo te llamas?",
        answer: "Me llamo Erik 😁"
    },
    {
        input: "¿Usas React?",
        answer: "Sí, uso React en muchos de mis proyectos. Aunque, muchos también están hechos con Astro & HTML sin ningún framework/librería."
    },
    {
        input: "¿Qué tecnologías utilizas?",
        answer: "Uso React en muchos de mis proyectos. Aunque, muchos también están hechos con Astro & HTML sin ningún framework/librería. También utilizo PHP, es la tecnología en la que más estoy especializado."
    },
    {
        input: "¿Qué utilizas?",
        answer: "Uso React en muchos de mis proyectos. Aunque, muchos también están hechos con Astro & HTML sin ningún framework/librería. También utilizo PHP, es la tecnología en la que más estoy especializado."
    },
    {
        input: "¿Con qué está hecha tu página?",
        answer: "Mi página web está hecha con Astro. Antes estaba hecha con HTML sin ninguna librería pero recientemente la he pasado a AstroJS. Tengo un blog sobre ello https://erik.pages.dev/articulo/cambio-a-astro"
    },
    {
        input: "¿Cuantos proyectos has realizado?",
        answer: "He realizado más de 15 proyectos. Entre ellos destaco 'AstroJS Wiki', WindfulCSS y Pywarp"
    }
]

const input = "Con que está hecha la pagina"


for (let index = 0; index < messages.length; index++) {
    const item = messages[index];
    
    if (stringsAreSimilar(input, item.input)) console.log(item.answer)
}
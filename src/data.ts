export const language = "JavaScript"

const themes = [
    {
        name: "Variáveis",
        message: ''
    }
]

themes.forEach((theme) => {
    theme.message = `Escreva uma documentação sobre ${theme} na linguagem 
    ${language}`
})

export default themes
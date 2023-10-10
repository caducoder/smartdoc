import { Card } from "./components/Card"
import themes, { language } from "./data"

function App() {
  return (
    <>
    <h1 className="text-2xl font-bold">{language}</h1>
      {themes.map((theme, i) => (
        <Card key={i}/>
      ))}
    </>
  )
}

export default App

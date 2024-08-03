import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

export function App () {
  const { fact, refreshRandomFact} = useCatFact()
  const { imageUrl } = useCatImage({fact})
  
    const handleClick= async()=>{
      refreshRandomFact()
    }

  return (
        <main>
        <h1>Hello word</h1>
        <button onClick={handleClick}>Obtener nueva información</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Imagen extraída utilizando las primeras tres palabras' />}
        
        </main>

    )
}
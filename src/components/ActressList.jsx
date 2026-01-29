import axios from "axios"
import { useState } from "react"

const endpoint = "https://lanciweb.github.io/demo/api/actresses/"


function ActressList() {
    // variabile stato lista attrici
    const [actresses, setActresses] = useState([]);

    // funzione che chiama endpoint API
    function fetchActress() {
        axios.get(endpoint)
            .then((res) => console.log(res.data))
            .catch(err => console.error("errore richiesta"))
    }   
    // uso la funzione per vedere l'array in console
    fetchActress()

    return (
        <h3>Guarda console!</h3>
        
  )
}

export default ActressList

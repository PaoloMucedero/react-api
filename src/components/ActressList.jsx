import axios from "axios"
import { useState, useEffect } from "react"

const endpoint = "https://lanciweb.github.io/demo/api/actresses/"

function ActressList() {
    // variabile stato lista attrici
    const [actresses, setActresses] = useState([]);

    // funzione che chiama endpoint API
    function fetchActress() {
        axios.get(endpoint)
            .then((res) => setActresses(res.data))
            .catch(err => console.error("errore richiesta"))
    }
    // uso la funzione per vedere l'array in console, ma così funziona solo fin quando setActresses non entra in azione aggiornando l'array
    // fetchActress()
    // con useEffect posso decidere quando effettuare la chiamata e quindi eseguire fetchActress senza creare un loop di chiamate
    useEffect(() => {
        fetchActress();
    }, []);

    return (
        <>
            <h3>Card create con fetch API</h3>
            <div className="container d-flex justify-content-center flex-wrap gap-3">
                {actresses.map((actress) => (
                    <div key={actress.id} className="card">
                        <img src={actress.image} className="card-img-top" alt="..." />
                        <h5 className="card-title">{actress.name}</h5>
                        <p className="card-text">{actress.birth_year}</p>
                        <p className="card-text">{actress.nationality}</p>
                        <p className="card-text">{actress.biography}</p>
                        <p className="card-text">{actress.awards}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ActressList

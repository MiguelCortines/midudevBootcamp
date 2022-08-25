import React from 'react'

const notes = [
  
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const App1 = () => {
  // const { notes } = props                                             // NO SE QUE ES NI QUE HACE ESTO

  /*
  if (!notes) {                                                          // RENDERIZADO CONDICIONAL POR SI NOTES NO TIENE NINGUN VALOR (p.e. undefined)
    return "No hay nada que mostrar"                                     // HACERLO CON ! NO ES BUENA PRACTICA, DEBAJO SE HACE MEJOR
  }
  */                                                                     // SI SE DESCOMENTA, ESTE PREVALECE SOBRE EL DE ABAJO

  return (
    <div>
      <h1>Notes</h1>
      {typeof notes === 'undefined'? 'notes is undefined':               // OTRO REND. COND. MISMO OBJETIVO QUE EL DE ARRIBA. TERNARIAS
      notes === null? 'notes is null':
      notes.length === 0? 'notes is empty':
      notes.map((note) => {                                              // NO ENTIENDO BIEN LA NOTACION DE MAP
        return <p key={note.id}>{note.id}{" "}{note.content}</p>;        // LA KEY EVITA UN WARNING                                             
      })}
    </div>
  )
}

export default App1;

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
     pais: string;
     casaNro: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'juan',
        edad: 22,
        direccion: {
            pais: 'Argentina',
            casaNro: 2366
        }
    }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  );
};

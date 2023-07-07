export const TiposBasicos = () => {
  
  let nombre: string | number= 'Juan';
  nombre = 123;

  const edad: number = 35;

  const activo: boolean = true

  const poderes: string[] = ['volar', 'velocidad']
  const otro: (string|number)[] = ['volar', 'velocidad']
  return (
    <>
        <h3>Tipos básicos</h3>
        {nombre}, {edad}, {(activo) ? 'activo' : 'no activo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}

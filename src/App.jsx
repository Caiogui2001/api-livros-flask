
import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const resposta = await fetch('/api/livros', {
        method: 'GET'
      })

      if (!resposta.ok) {
        throw new Error('Erro ao consultar a API')
      }

      const dados = await resposta.json()
      setLivros(dados.livros)
    } catch (error) {
      setErro('Não foi possível buscar os livros.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <p>Consulte os livros disponíveis em nossa livraria.</p>

      <button onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {carregando && <p>Carregando livros...</p>}
      {erro && <p className="erro">{erro}</p>}

      <div className="lista-livros">
        {livros.map((livro) => (
          <div className="livro" key={livro.id}>
            <h2>{livro.titulo}</h2>
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App

# API de Livros com Python e Flask

Atividade prática AV2 da disciplina Programação — Web Coding.

## Objetivo
Criar uma API simples em Python com Flask que disponibiliza exatamente três livros por meio de uma requisição HTTP GET, com resposta JSON.

## Requisitos
- Python 3 instalado
- pip

## Instalação
Abra o terminal na pasta do projeto e execute:

```bash
python -m venv venv
```

Ative o ambiente virtual no Windows (PowerShell):

```powershell
.\venv\Scripts\Activate.ps1
```

No Windows (Prompt de Comando):

```cmd
venv\Scripts\activate.bat
```

No Linux/macOS:

```bash
source venv/bin/activate
```

Instale as dependências:

```bash
python -m pip install -r requirements.txt
```

## Execução
```bash
python app.py
```

## Rota
- Método: `GET`
- URL local: `http://127.0.0.1:5000/livros`

## Exemplo de resposta
```json
{
  "livros": [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977}
  ]
}
```

## Observações
Os dados estão definidos diretamente no código. Não é necessário banco de dados nem autenticação. O modo `debug=True` é destinado apenas ao desenvolvimento local.

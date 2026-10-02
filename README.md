# OGC API DGT

Projecto MkDocs + Material para a documentação das OGC API da DGT.

## Estrutura

Existe uma estrutura PT e EN.

## Instalação

```powershell
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Pré-visualização

```powershell
mkdocs serve
```

Abrir `http://127.0.0.1:8000/`.

## Build

```powershell
mkdocs build --strict
```

O HTML estático fica em `site/`.

## Publicação (opcional)

Adicionar subtree ao branch gh-pages

`git subtree push --prefix site origin gh-pages`

## Formatos legíveis por máquina

Os termos de utilização são publicados também como `terms-of-use.json` e `terms-of-use.jsonld`, a partir da mesma versão estruturada da documentação portuguesa.


## Idiomas

A documentação está organizada por idioma:

- Português: `http://127.0.0.1:8000/pt/`
- English: `http://127.0.0.1:8000/en/`

Na publicação em `/termosdoservico/`, os endereços correspondem a `/termosdoservico/pt/` e `/termosdoservico/en/`.

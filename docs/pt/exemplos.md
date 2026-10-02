# Exemplos de utilização

## Consulta de uma colecção

O ponto de entrada para as colecções é:

```text
https://ogcapi.dgterritorio.gov.pt/collections
```

A partir daí, seleccione a colecção pretendida e consulte a documentação da operação correspondente.

## Consulta com paginação

Para grandes volumes, utilize os mecanismos de paginação disponibilizados pela operação.

O número máximo de elementos por resposta e os parâmetros de paginação devem ser confirmados no OpenAPI da versão em produção.

## Consulta espacial

Quando a operação suportar filtros espaciais, limite a consulta à área de interesse.

Isto reduz o volume transferido e, em regra, melhora o desempenho e reduz a carga sobre o serviço.

## Integração em SIG

As OGC API podem ser utilizadas por software SIG e por aplicações que suportem as especificações OGC correspondentes.

A compatibilidade concreta depende da versão do software e da API utilizada.

# Site do aplicativo e pesquisa

O site principal apresenta o produto em desenvolvimento. Os CTAs levam a `https://lp.especies.com.br`, centralizado em `app/lib/site.ts`. Para mudar o destino, definir `NEXT_PUBLIC_RESEARCH_URL` antes do build. A alternativa `https://especies.com.br/pesquisa` exige configurar hospedagem/proxy para servir o projeto separado `lp-especies` nesse caminho; não basta apontar para o nome da pasta.

Esta alteração não publica nenhum dos projetos nem configura DNS. O formulário e sua persistência continuam no projeto `lp-especies`.

## Prévias do aplicativo

Os recortes são componentes React, com Motion para transições e cartão flutuante, e respeitam `prefers-reduced-motion`. Não são screenshots de telas inteiras. Fotografias são recursos exportados do Figma e armazenados localmente. As interações demonstrativas não criam registros no aplicativo. A instrumentação Amplitude preexistente continua no site.

Arquivo Figma: `n2g3bpGOUCAp83XBLDjGcL`, aba Design `14636:15754`.

| Conteúdo | Frame de origem |
| --- | --- |
| Funcionários ativos / gestão | `14799:18883` |
| Procedimento veterinário | `14804:45637` |
| Perfil do animal | `14799:19055` |
| Interação animal / biologia | `14799:17822` |
| Refeição / manejo e nutrição | `14799:19599` |

As composições foram adaptadas à apresentação no site e à tipografia Sarabun da landing page. São recortes demonstrativos, não uma reprodução integral de cada tela nem uma declaração de funcionalidades já disponíveis.

As fontes Sarabun foram reaproveitadas localmente de `lp-especies/public/fonts`. Links para lojas sem destino e links da página inicial para login/cadastro vazios foram removidos da navegação.

## Verificação

Executar `bun run lint` e `bun run build`. Prévia local: `bun run dev --port 3011`. Verificar os quatro perfis, opções de biologia/alimentação, menu móvel, FAQ e CTAs para pesquisa. Revisar larguras de 320, 390, 768 e 1280 pixels.

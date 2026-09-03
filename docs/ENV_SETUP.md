# Environment Variables Guide

## Overview
Este projeto usa variáveis de ambiente para configurar serviços de terceiros como Amplitude Analytics.

Seguimos as **melhores práticas recomendadas pela Vercel**: as chaves são armazenadas como variáveis privadas (sem prefixo) e expostas ao cliente através de API Routes.

## Desenvolvimento Local

1. **Copie `.env.example` para `.env.local`:**
   ```bash
   cp .env.example .env.local
   ```

2. **Adicione suas chaves:**
   ```
   AMPLITUDE_API_KEY=dfc48cd6e4b71130f495d33a9c086a88
   ```

3. **Run the dev server:**
   ```bash
   bun run dev
   ```

**Nota:** `.env.local` é ignorado pelo git e nunca deve ser commitado.

## Produção (Vercel)

### Configuração Profissional

1. **Acesse Vercel Dashboard**
   - Seu projeto → Settings → Environment Variables

2. **Adicione as variáveis SEM prefixo:**
   - **Name:** `AMPLITUDE_API_KEY` (sem `NEXT_PUBLIC_`)
   - **Value:** `dfc48cd6e4b71130f495d33a9c086a88`
   - **Environments:** Selecione todos (Production, Preview, Development)

3. **Salve e faça redeploy:**
   - Deployments → Clique no deployment atual
   - Botão "Redeploy"
   - Aguarde completar

### Como funciona?

```
┌─────────────────────────────────────────────────────┐
│ Vercel Environment Variables (Private)              │
│ AMPLITUDE_API_KEY=dfc48cd6e4b71130f495d33a9c086a88  │
└─────────────────────────────────────────────────────┘
              ↓ (Server-side only)
┌─────────────────────────────────────────────────────┐
│ API Route: GET /api/config/amplitude               │
│ - Lê AMPLITUDE_API_KEY do servidor                 │
│ - Retorna JSON com a chave para o cliente          │
└─────────────────────────────────────────────────────┘
              ↓ (Via fetch no cliente)
┌─────────────────────────────────────────────────────┐
│ Client-side (app/lib/amplitude.ts)                 │
│ - Chama API route para obter chave                 │
│ - Inicializa Amplitude SDK                         │
│ - Envia eventos para Amplitude                     │
└─────────────────────────────────────────────────────┘
```

### Por quê essa arquitetura?

- ✅ **Seguro** — Variáveis privadas no servidor (sem exposição desnecessária)
- ✅ **Profissional** — Segue recomendação oficial da Vercel
- ✅ **Flexível** — Fácil mudar chaves sem alterar código
- ✅ **Compatível** — Funciona com qualquer política de variáveis da Vercel
- ✅ **Auditável** — Todas as requisições passam por API Route (logs disponíveis)

## Estrutura de Arquivos

```
app/
├── api/
│   └── config/
│       └── amplitude/
│           └── route.ts          # API Route que expõe a chave
├── lib/
│   └── amplitude.ts              # Inicialização do Amplitude
├── components/
│   └── AmplitudeProvider.tsx      # Provider que inicializa na primeira render
└── layout.tsx                     # Root layout com AmplitudeProvider
```

## Segurança

- ✅ Seguro: Usar `AMPLITUDE_API_KEY` privada e expor via API Route
- ✅ Seguro: A chave é de ingestion (pública por design)
- ❌ Nunca: Committar `.env.local` no git
- ❌ Nunca: Usar chaves secretas como `NEXT_PUBLIC_`

## CI/CD com Vercel

Vercel automaticamente:
1. Detecta mudanças no repositório
2. Injeta variáveis de ambiente `AMPLITUDE_API_KEY` do painel
3. Faz build do projeto
4. Deploy com variáveis disponíveis no servidor
5. API Route retorna chave para cliente quando solicitado

Nenhuma ação manual necessária além de adicionar variáveis uma vez no painel.

## Troubleshooting

**"Amplitude API key missing — analytics disabled"**
- Verifique se `AMPLITUDE_API_KEY` está em Vercel → Environment Variables
- Verifique se está marcada para o ambiente correto (Production)
- Faça redeploy
- No console, verifique se há erro ao chamar `/api/config/amplitude`

**Evento não aparece no Amplitude**
- Abra DevTools (F12) → Network
- Procure por requisição em `/api/config/amplitude`
- Verifique se retorna `{ apiKey: "..." }`
- Procure por erros no Console

**Variável não está sendo injetada**
- ❌ Não use `NEXT_PUBLIC_` no painel Vercel (eles não permitem)
- ✅ Use `AMPLITUDE_API_KEY` (sem prefixo)
- ✅ A API Route le do servidor e expõe ao cliente


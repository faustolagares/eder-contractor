# Server - Resend Email API

Este servidor Express gerencia o envio de emails via Resend API para o formulário de contato.

## Como Rodar

1. Certifique-se de que as dependências estão instaladas:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm run server
```

Para desenvolvimento com hot-reload:
```bash
npm run dev:server
```

O servidor rodará na porta 3001 por padrão.

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```
RESEND_API_KEY=re_V66AW3m8_JYgQuuxcGcw2tBhr5RcvijZ7
PORT=3001
```

## Endpoints

### GET `/health`
Verifica se o servidor está rodando.

### POST `/api/send-email`
Envia email via Resend com os dados do formulário.

**Body (FormData):**
- `fullName` (string, obrigatório)
- `phoneNumber` (string, obrigatório)
- `emailAddress` (string, opcional)
- `typeOfService` (string, obrigatório)
- `projectLocation` (string, obrigatório)
- `preferredStartDate` (string, opcional)
- `preferredContactMethod` (string, opcional)
- `projectDetails` (string, obrigatório)
- `photo` (file, opcional) - até 10MB

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "data": { ... }
}
```

## Email Configuration

- **From:** noreply@updates.edercontractor.com
- **To:** edercontractorusa@gmail.com


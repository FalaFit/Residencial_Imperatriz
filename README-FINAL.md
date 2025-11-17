# 🏢 Portaria Digital - Residencial Imperatriz

Sistema profissional de notificação de entregas com design moderno, cores douradas e autenticação segura.

---

## 🎨 **VERSÃO FINAL - ESPECIFICAÇÕES**

### ✨ Características Principais

- **🔐 Sistema de Login Completo**
  - Autenticação obrigatória
  - Sessão expira em 2 horas
  - Dados salvos localmente
  
- **🌙 Dark Mode Exclusivo**
  - Paleta de cores douradas (Amber/Yellow/Gold)
  - Inspirado em design premium
  - Glassmorphism profissional

- **📊 Interface Simplificada**
  - Sem estatísticas (foco na simplicidade)
  - Otimizado para porteiros
  - Apenas funcionalidades essenciais

- **📈 Ordem Crescente**
  - Andares: 1º → 20º (não 20º → 1º)
  - Filtros: Baixos (1-10) antes de Altos (11-20)
  - Lógica intuitiva do menor para o maior

---

## 🔑 **CREDENCIAIS DE ACESSO**

```
Usuário: porteiro
Senha: imperatriz2025
```

> ⚠️ **IMPORTANTE**: Altere as credenciais no código antes do deploy em produção!

Para alterar, edite estas linhas no arquivo `index.html`:

```javascript
const CONFIG = {
    username: 'porteiro',        // ← Mude aqui
    password: 'imperatriz2025',  // ← Mude aqui
    webhookUrl: 'https://planejamentocomercialtvx.app.n8n.cloud/webhook/portaria-entrega',
    sessionTimeout: 2 * 60 * 60 * 1000
};
```

---

## 🎨 **PALETA DE CORES**

### Cores Principais (Amber/Yellow/Gold)
```css
--primary: #fbbf24        /* Amber-400 */
--primary-dark: #f59e0b   /* Amber-500 */
--primary-light: #fcd34d  /* Amber-300 */
```

### Gradientes
```css
--gradient-primary: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
--gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
--gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
```

### Background Dark
```css
--bg-primary: #0f172a    /* Slate-900 */
--bg-secondary: #1e293b  /* Slate-800 */
--bg-tertiary: #334155   /* Slate-700 */
```

---

## 🚀 **DEPLOY NO GITHUB PAGES**

### 1. Preparar Arquivos

```
seu-repositorio/
├── index.html           ← Arquivo principal (já renomeado)
├── manifest.json        ← Configuração PWA
├── service-worker.js    ← Funcionalidade offline
└── README.md           ← Documentação
```

### 2. Upload no GitHub

```bash
git init
git add .
git commit -m "feat: Sistema de Portaria Digital v3.0"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione: `main` + `/ (root)`
3. Clique em **Save**
4. Aguarde 1-2 minutos
5. Acesse: `https://seu-usuario.github.io/nome-repo/`

---

## 📱 **FUNCIONALIDADES**

### ✅ Sistema de Login
- Tela de autenticação profissional
- Validação de credenciais
- Timeout automático de 2 horas
- Animação de erro em caso de senha incorreta

### ✅ Interface Simplificada
- Busca por número de apartamento
- Filtros rápidos (Todos/Baixos/Altos)
- Grid de apartamentos do 1º ao 20º andar
- Modal de seleção de tipo de entrega

### ✅ Tipos de Entrega
- 📦 **Encomenda Normal** (verde)
- 🔔 **Delivery Urgente** (vermelho)

### ✅ Feedback Premium
- Toast notification elegante
- Loading states profissionais
- Haptic feedback (vibração no mobile)
- Animações suaves

### ✅ PWA Completo
- Instalável como app nativo
- Funciona offline
- Cache inteligente
- Experiência mobile otimizada

---

## ⚙️ **CONFIGURAÇÕES**

### Webhook URL

Para conectar com seu sistema n8n, atualize a URL:

```javascript
const CONFIG = {
    // ...
    webhookUrl: 'SUA_URL_AQUI',
    // ...
};
```

### Timeout da Sessão

Para alterar o tempo de expiração:

```javascript
const CONFIG = {
    // ...
    sessionTimeout: 2 * 60 * 60 * 1000  // 2 horas (em milissegundos)
    // ...
};
```

---

## 🎯 **PRINCIPAIS MUDANÇAS**

### ✅ Implementado
- [x] Sistema de login completo
- [x] Cores amber/yellow/gold
- [x] Apenas dark mode
- [x] Ordem crescente (1º → 20º andar)
- [x] Filtros em ordem lógica (Baixos antes de Altos)
- [x] Removido dashboard de estatísticas
- [x] Interface simplificada para porteiros
- [x] Glassmorphism profissional

### ❌ Removido
- [x] Modo claro / theme toggle
- [x] Dashboard de estatísticas
- [x] Contadores de entregas
- [x] Última entrega
- [x] Botão de visualizar estatísticas

---

## ⌨️ **ATALHOS DE TECLADO**

- `/` - Focar no campo de busca
- `ESC` - Fechar modal
- `ENTER` - Enviar formulário de login

---

## 📱 **RESPONSIVIDADE**

### Mobile (< 640px)
- 3 colunas de apartamentos
- Header empilhado
- Modal otimizado

### Tablet (640px - 1024px)
- 6 colunas de apartamentos
- Layout intermediário

### Desktop (> 1024px)
- Layout completo
- Todas features visíveis

---

## 🔧 **TROUBLESHOOTING**

### Login não funciona
- Verifique as credenciais no console
- Confirme que localStorage está habilitado
- Tente limpar cache e cookies

### Webhook não envia
- Verifique a URL do webhook
- Confirme que está usando HTTPS
- Verifique logs no console do navegador

### Sessão expira muito rápido
- Ajuste `sessionTimeout` no código
- Verifique timezone do sistema

---

## 🎓 **TECNOLOGIAS**

- **HTML5**: Estrutura semântica
- **CSS3**: Glassmorphism, animações, gradientes
- **JavaScript ES6+**: Autenticação, localStorage, fetch
- **Service Worker**: PWA, cache, offline
- **Web App Manifest**: Instalação como app

---

## 🔒 **SEGURANÇA**

### ⚠️ Recomendações

1. **Altere as credenciais padrão** antes do deploy
2. **Use HTTPS** sempre (GitHub Pages já usa)
3. **Configure timeout** adequado para seu caso de uso
4. **Não commite** senhas reais no repositório público

### 🔐 Boas Práticas

- Credentials nunca devem estar em código cliente para produção real
- Para produção, considere autenticação backend real
- Use variáveis de ambiente para dados sensíveis
- Implemente rate limiting no webhook

---

## 💡 **PRÓXIMAS MELHORIAS POSSÍVEIS**

- [ ] Backend real com banco de dados
- [ ] Histórico de entregas
- [ ] Múltiplos usuários com permissões
- [ ] Notificações push
- [ ] Integração com câmera (QR Code)
- [ ] Exportação de relatórios
- [ ] Dashboard administrativo separado

---

## 📞 **SUPORTE**

Para dúvidas ou problemas:
1. Consulte esta documentação
2. Verifique o console do navegador (F12)
3. Teste em modo anônimo
4. Limpe cache e cookies

---

## 📈 **COMPARAÇÃO: ANTES vs DEPOIS**

| Feature | V1 | V2 | V3 (Final) |
|---------|----|----|------------|
| Login | ❌ | ❌ | ✅ |
| Cores | Indigo/Purple | Indigo/Purple | Amber/Gold |
| Modo Claro | ✅ | ✅ | ❌ |
| Estatísticas | ❌ | ✅ | ❌ |
| Ordem | Decrescente | Decrescente | Crescente |
| Simplicidade | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Design | Básico | Premium | Premium |

---

## ✨ **RESULTADO FINAL**

Um sistema **profissional**, **seguro** e **simplificado** que:

✅ Tem autenticação obrigatória  
✅ Design moderno com cores douradas  
✅ Interface intuitiva para porteiros  
✅ Ordem lógica crescente  
✅ Apenas funcionalidades essenciais  
✅ Experiência mobile premium  
✅ PWA instalável  
✅ Feedback visual em cada ação  

---

**Desenvolvido com ❤️ para Residencial Imperatriz**

*Versão 3.0 - Sistema Profissional de Portaria Digital*

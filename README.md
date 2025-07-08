# TaskManager

## Rodando o Projeto
### Requisitos
- Node.js instalado (v16 ou superior recomendado)
- Gerenciador de pacotes como `npm` ou `yarn`
- JSON Server Instalado

### Como iniciar o projeto

```bash
npm install -g json-server
npm install
npm run dev
```

### Iniciando o Servidor 
```bash
json-server --watch db.json --port 3000
```

---

## Lista de Dependências

```json
"dependencies": {
  "axios": "^1.10.0",
  "pinia": "^3.0.3",
  "vue": "^3.5.17",
  "vue-router": "^4.5.1",
  "vue-sweetalert2": "^5.0.11"
}
```

---

### Vue (`^3.5.17`)
- **Descrição**: Framework principal utilizado no projeto.
- **Função**: Responsável pela criação de interfaces reativas e componentes reutilizáveis.
- **Doc oficial**: https://vuejs.org/

---

### Vue Router (`^4.5.1`)
- **Descrição**: Biblioteca oficial de roteamento para Vue.js.
- **Função**: Permite a navegação entre páginas/componentes através de URLs.
- **Doc oficial**: https://router.vuejs.org/

---

### Pinia (`^3.0.3`)
- **Descrição**: Gerenciador de estado oficial para Vue 3.
- **Função**: Armazena e compartilha dados entre componentes da aplicação.
- **Doc oficial**: https://pinia.vuejs.org/

---

### Axios (`^1.10.0`)
- **Descrição**: Cliente HTTP baseado em Promises.
- **Função**: Usado para fazer requisições para APIs (GET, POST, PUT, DELETE etc).
- **Doc oficial**: https://axios-http.com/

---

### Vue SweetAlert2 (`^5.0.11`)
- **Descrição**: Wrapper para integrar os alertas visuais do SweetAlert2 ao Vue.
- **Função**: Exibe modais bonitos e interativos, como mensagens de sucesso, erro, confirmação, etc.
- **Doc oficial**: https://github.com/avil13/vue-sweetalert2


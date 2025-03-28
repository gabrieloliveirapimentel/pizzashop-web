# 🍕 Pizza Shop

Bem-vindo ao repositório do **Pizza Shop**! Aqui você encontrará as instruções para rodar o servidor, a aplicação e realizar as configurações necessárias.

---

### 1. Rodar o Servidor
**Inicie o Docker**  
No terminal, execute o comando abaixo para iniciar o serviço do Docker:
```bash
sudo systemctl start docker.service
```

**Suba o container da API**  
Com o Docker rodando, navegue até a pasta `api` e inicie o container com o comando:
```bash
sudo docker-compose up -d
```

**Inicie o servidor de desenvolvimento**  
Rodar o comando para iniciar o banco de dados e o servidor:
```bash
bun migrate
bun seed
bun dev
```

 **Parar os serviços do Docker**  
Para encerrar os serviços do Docker, utilize os comandos abaixo:
```bash
sudo systemctl stop docker.service
sudo systemctl stop docker.socket
```

> **Nota:** Caso o banco de dados ainda não tenha sido criado, siga o passo a passo descrito no arquivo `README.md` da pasta `api`.

---

### 2. Rodar a Aplicação

**Instale as dependências**  
Na pasta `app`, execute os comandos:
```bash
pnpm i
```

**Inicie o ambiente de desenvolvimento**  
Após instalar as dependências, rode:
```bash
pnpm run dev
```


> **Nota:** Esta aplicação utiliza o **pnpm** como gerenciador de pacotes. Certifique-se de que ele está instalado em sua máquina. Para instalar o pnpm no Linux, utilize:
    
```bash
yay -S pnpm
```

---

### 3. Instalação do Bun

Caso o **Bun** ainda não esteja instalado em sua máquina, você pode instalá-lo com o seguinte comando (Linux):
```bash
curl -fsSL https://bun.sh/install | bash
```

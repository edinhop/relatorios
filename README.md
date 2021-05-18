# Guia

- renomear `.env.example` para `.env`, em seguida troque o IP inserido no arquivo pelo seu IP local.

* inicie com o comando  
  `docker-compose up`

* para entrar entrar no terminal do container :  
  `docker-compose exec relatorios sh`

* rodar somentes comandos sem entrar no container  
  `docker-compose exec relatorios [npm|yarn] [install|<qualquer-outro>]`

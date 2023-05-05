# Aulas Assíncronas

## Criar container do postgres

```
  docker pull postgres
```

```
  sudo docker run --name meu-postgres --restart always -v $HOME/banco-postgres:/var/lib/postgresql/data -p7777:5432 -e POSTGRES_PASSWORD=SENHA_DO_USUÁRIO_POSTGRES -d postgres
```

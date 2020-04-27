FROM postgres:10.4

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seeds/ /docker-entrypoint-initdb.d/seeds/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/
# Drum Root API

An Express REST API service for Creating and Sharing Drum Loops. See [Drum Root](https://github.com/rgavinc/drum-root) for Front End Service.

## About Drum Root

See the [front-end readme](https://github.com/zero-to-mastery/drum-root/blob/master/README.md)

---

## Running Locally

To get started, fork the repository and run the following commands:

    npm install
    npm run start

## Running using Docker (Back End)

To get started clone the drum-root-api and run the following commands

    sudo docker-compose up --build (Gets running on port 3000)

To access the PSQL shell through local (goto a new terminal)

    docker exec -it drum-root-api_postgres_1 bash
    root@------:/# su postgres
    $ psql

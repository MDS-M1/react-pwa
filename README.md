# PWA Application V1

## Description

I have developed a React Progressive Web Application (PWA) that lists posts from an API. The application is designed to work offline, allowing users to view previously loaded posts even when they are not connected to the internet. The app uses a caching strategy that stores data in the browser's cache, ensuring that the posts are still available even after the user has closed the application.

## Features

- [x] Cache single post after visit
- [x] Cache multiple post after visit
- [x] Cache post list
- [x] Style all application
- [x] Reset default css used by navigators
- [x] Navigate using react router V6
- [x] Use Docker

## Requirements

- Docker
- Docker compose

## Setup application

1. Clone repository

```sh
git clone git@github.com:MDS-M1/react-pwa.git
```

2. Install dependencies

```sh
cd app && npm install
```

**Now everything is ready to launch our project**

## Launch project

*Make sure you are outside the `/app` directory*

```sh
docker compose up -d
```
*`-d` is optional (used for detached container from your terminal)*

## Contributors

👤 **[Rémi Rubis](https://github.com/remirubis)**

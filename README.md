# Movie Directory App

## Overview
A Movie Directory application built with React and React Router v6. Users can browse directors and their movies, add new directors, and add new movies to a director's collection with seamless client-side navigation.

## Setup

1. Fork and clone this repo
2. Run `npm install`
3. Run `npm install react-router-dom@6`
4. Run `npm run server` to start the backend at `http://localhost:4000`
5. In another terminal, run `npm run dev` to start the app at `http://localhost:5173`
6. Run `npm run test` to run the test suite

## Features

- **View all directors** — browse the full list of directors on the `/directors` route
- **View director details** — click a director to see their bio and movie list at `/directors/:id`
- **Add a new director** — submit the form at `/directors/new` and get redirected to the new director's page
- **View movie details** — click a movie to see its details at `/directors/:id/movies/:movieId`
- **Add a new movie** — submit the form at `/directors/:id/movies/new` and get redirected to the new movie's detail page

## Route Structure
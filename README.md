# Star Wars movies list & echarts treemap

## Description

A simple app that displays a list of Star Wars movies and shows a chart with the ammount of characters. You can also navigate to every movie to see some info about it.

### Demo

Yo can see the deployed app here: https://giselleperez.github.io/echarts-sw/

### Running in local

1. Run `npm run start` to start the app
2. Go to `http://localhost:3000/echarts-sw` to see the list of movies and chart

### Tech stack

- React
- Typescript
- `react-router-dom`
- Echarts using `echarts-for-react`
- `gh-pages`

### Good practices

- Following `conventional commits` standards for commits
- Folder structure
- Implement visual components for simple data display and complex components that handle logic
- Create a new branch for every feature. Then create a pull request to master. Then merge & deploy

### Architecture

- Wrapper component which calls the data and injects it to entire app. Also contains router for navigation
- Child components to display list of movies, chart & movie detail
- Some auxiliary components for displaying info through the app

### Deploy

- Deployed using `gh-pages` with custom script, which will publish files to a gh-pages branch on GitHub
- Process: after merging run `npm run deploy` and changes will be reflected on deployed app

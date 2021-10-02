# Math Champ

## How to install

Navigate to the math folder using your Terminal and run these commands:

`npm install`

`npm run dev`

## Storybook

Math Champ has a library of UI components that make up the website. They're categorized as a generic UI component or a question type component. To see the component library run this command in your Terminal:

`npm run storybook`

## How to add a new skill

Math Champ is continuously adding more skills and questions types. If you want to create a new skill you must follow these steps:

- Copy this PR https://github.com/vithushan19/math/pull/297
- Insert a new row in the user_skills table in Hasura for all users with this new skill
- Update the [user sync method](https://github.com/vithushan19/math/blob/8f4c2fa05760515cf9237921850ecb9a748e78ba/pages/api/auth/%5B...nextauth%5D.js#L33) with your new skill so new users will get the skill initialized

## Units

- grades vs unit vs skill
- react components
- show a demo question type
- graphQL queries/mutations
- hasura
- Different stages of the assessment (INPUT, TEST, CONCLUSIONS)
- adaptive difficulty
- practice tracker
- how the question generator
- Software testing

## Important libraries that we ue

- [Tailwind + NextJS Starter](https://tailwindcss.com/docs/guides/nextjs)
- [Tailwind CSS](https://tailwindcss.com/) (v2)
- [Storybook](https://storybook.js.org/)
- [Apollo](https://www.apollographql.com/docs/react/)
- [Colyseus](https://docs.colyseus.io/getting-started/javascript-client/)

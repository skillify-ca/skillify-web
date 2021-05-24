import app from './app';

// Process.env will always be comprised of strings, so we typecast the port to a
// number.
const PORT:number = Number(process.env.PORT) || 3001;

app.listen(PORT);
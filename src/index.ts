import Express, { Request, Response, json } from 'express';
import z, { ZodError } from 'zod';
import { createUserInput } from './inputs';

const app = Express();
app.use(json());

app.post('/createUser', (req: Request, res: Response) => {
  try {
    const data = createUserInput.parse(req.body);

    // send the now validated data to your service / database handler

    return res.send({
      data,
      message: 'Input validated!!',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.send(error);
    }
    return res.status(500).send({
      message: 'unknown error...',
    });
  }
});

app.listen(3000, () => {
  console.log('Application Running...');
});

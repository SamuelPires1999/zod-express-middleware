import Express, { Request, Response , json} from 'express';
import z, { ZodError } from 'zod';

const app = Express();
app.use(json())


const inputShape = z.object({
  stringExample: z.string(),
  numberExample: z.number(),
});

app.post('/string', (req: Request, res: Response) => {
  try {
    inputShape.parse(req.body);

    return res.send({
      message: 'Input validated succesfully',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.send({
        errors: error.issues.map(error => `${error.message} on field: ${error.path[0]}`)
      });
    } else {
      console.log('UNKNOWN ERROR');
    }
  }
});

app.listen(3000, () => {
  console.log('Application Running...');
});

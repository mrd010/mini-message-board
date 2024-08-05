import { Request, Response, Router } from 'express';
import { Message } from '../models/messages';

const messages: Message[] = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'mini message board', messages: messages });
});

indexRouter.get('/new', (req: Request, res: Response) => {
  res.render('form', { title: 'new message' });
});

indexRouter.post('/new', (req: Request, res: Response) => {
  const data = req.body as Omit<Message, 'added'>;
  messages.push({ ...data, added: new Date() });
  res.redirect('/');
});

indexRouter.get('/inbox/:id', (req: Request, res: Response) => {
  const index = Number(req.params.id);
  if (typeof index === 'number' && index >= 0 && index < messages.length) {
    const message = messages[index];
    res.render('message-details', { title: message.user, date: message.added, text: message.text });
  }
});
export { indexRouter };

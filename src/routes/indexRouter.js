const { Router } = require('express');

const messages = [
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

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'mini message board', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'new message' });
});

indexRouter.post('/new', (req, res) => {
  const data = req.body;
  messages.push({ ...data, added: new Date() });
  res.redirect('/');
});

indexRouter.get('/inbox/:id', (req, res) => {
  const index = Number(req.params.id);
  if (typeof index === 'number' && index >= 0 && index < messages.length) {
    const message = messages[index];
    res.render('message-details', { title: message.user, date: message.added, text: message.text });
  }
});

module.exports = indexRouter;

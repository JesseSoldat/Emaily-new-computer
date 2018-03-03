const _ = require('lodash');
const Path = require('path-parser');
const {URL} = require('url');
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');


const Survey = mongoose.model('survey');

module.exports = app => {

  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _users: req.user.id })
      .select({ recipients: false });

    res.send(surveys);
  });


  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {title, subject, body, recipients} = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map(email => ({email: email.trim()})),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await survey.save();
      req.user.credits -=1;
      const user = await req.user.save();
      res.send(user);
    }
    catch (err) {
      res.status(422).send(err);
    }
  });

}
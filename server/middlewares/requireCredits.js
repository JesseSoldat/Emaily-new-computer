module.exports = (req, res, next) => {
  if(req.users.credits < 1) {
    return res.status(403).send({error: 'Not enough credits'});
  }
  next();
};
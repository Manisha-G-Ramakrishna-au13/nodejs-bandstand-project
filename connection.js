const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error',function(error){
    console.log('error is:',error);
});
router.get("/emailfetch", authCheck, async (req, res, next) => {
    try {
    //listing messages in users mailbox 
      let emailFetch = await gmaiLHelper.getEmails(req.user._doc.profile_id , '/messages', req.user.accessToken)
      emailFetch = emailFetch.data
      res.send(emailFetch)
    } catch (err) {
      next(err);
    }
  })
  
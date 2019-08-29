
const checkAdmin = (req, res, next) => {

  // なにかしら権限チェックをする
  if(true){
    next();
  }else{
    res.status(401).send('Auth Error');
  }

};


export default {
  checkAdmin,
};

import Users from '../models/users';

const show = (req, res) => {
  Users.show().then(results => {

    res.send({
      users: results
    });
  });
};

export default {
  show,
};

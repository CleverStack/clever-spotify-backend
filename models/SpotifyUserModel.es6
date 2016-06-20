export default function(Model) {
  return Model.extend(
  {
    type            : 'ORM',
    timeStampable   : false,
    softDeleteable  : false
  },
  {
    username: {
      type          : String,
      length        : 32,
      primaryKey    : true
    },
    password: {
      type          : String,
      required      : true
    }
  });

}

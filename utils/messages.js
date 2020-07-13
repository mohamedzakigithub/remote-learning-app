const moment = require("moment");

function formatMessage(name, photo, text) {
  return {
    name,
    photo,
    text,
    date: moment().format("DD MMM YYYY h:mm a"),
  };
}

module.exports = formatMessage;

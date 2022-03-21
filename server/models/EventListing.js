const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true
  },
  league: {
    type: String,
    required: true
  },
  cheese: String,
  game: {
    type: String,
    required: true
  },
  broadcastNetwork: [String]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  schema: eventSchema,
  model: Event
};

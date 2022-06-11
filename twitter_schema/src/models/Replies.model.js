const mongoose = require("mongoose");

const repliesSchema = new mongoose.Schema(
  {
    replies: { type: String, required: true },
    post_picture: [{ type: String }],
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  }
);

const Replies = mongoose.model("replie", repliesSchema);

module.exports = Replies;
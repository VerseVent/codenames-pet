import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  title: {
    type: String,
    required: [true, "Assign room title!"],
    unique: [true, "Room already exists."],
  },
  cards: [
    {
      word: {
        type: String,
        unique: [true, "Word already exists!"],
        required: [true, "Word is required!"],
        match: [
          /^(?=.{2,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
          "Word invalid!",
        ],
      },
      suggested: {
        type: Boolean,
        unique: [false],
        required: [true, "Assign suggested state!"],
      },
      obvious: {
        type: Boolean,
        unique: [false],
        required: [true, "Assign obvious state!"],
      },
      definition: {
        type: String,
        unique: [false],
        required: [true, "Assign definition!"],
      },
    },
  ],
});

const Room = models.Room || model("Room", RoomSchema);

export default Room;

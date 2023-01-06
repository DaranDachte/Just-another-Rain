import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  topic: {
    type: "string",
    required: true,
    enum: [
      "I have depression",
      "Question for a lawyer",
      "Social help",
      "Work in Germany",
      "Education",
      "Medicine and health",
      "Violence in Family",
      "Other",
    ],
  },
  question: { type: "string", required: true },
  text: { type: "string", required: true },
});

const Add = model("Add", addSchema);

export default Add;

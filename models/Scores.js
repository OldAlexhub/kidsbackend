import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  score: { type: Number, required: true },
});

const ScoreModel = mongoose.model("scores", ScoreSchema);

export default ScoreModel;

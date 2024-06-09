import ScoreModel from "../models/Scores.js";

const postScore = async (req, res) => {
  try {
    const { userId, score } = req.body;
    const newScore = new ScoreModel({ userId, score });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: "Error creating score", error });
  }
};

export default postScore;

import ScoreModel from "../models/Scores.js";

const updateScore = async (req, res) => {
  try {
    const { userId } = req.params;
    const { score } = req.body;

    // Fetch the existing score
    const existingScore = await ScoreModel.findOne({ userId });

    if (!existingScore) {
      return res.status(404).json({ message: "Score not found" });
    }

    // Add the new score to the existing score
    const newScore = existingScore.score + score;

    // Update the score
    existingScore.score = newScore;
    await existingScore.save();

    res.status(200).json(existingScore);
  } catch (error) {
    res.status(500).json({ message: "Error updating score", error });
  }
};

export default updateScore;

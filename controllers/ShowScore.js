import ScoreModel from "../models/Scores.js";

const ShowScore = async (req, res) => {
  try {
    const { userId } = req.params;

    const show = await ScoreModel.findOne({ userId });

    res.status(200).json({ messsage: `Score`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error` });
  }
};

export default ShowScore;

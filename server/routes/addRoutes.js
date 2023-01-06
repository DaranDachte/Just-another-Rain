import express from "express";
import Add from "../models/add.js";

const router = express.Router();

router.get("/list", async (req, res) => {
  const add = await Add.find();

  return res.status(200).json({ message: "List of questions", add });
});

router.post("/create", async (req, res) => {
  try {
    createdQuestion = await Add.create({
      name: req.body.name,
    });

    return res
      .status(201)
      .json({ message: "Question created", createdQuestion });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;

import express from "express";
const router = express.Router();

router.post("/validar-acesso", async (req, res) => {
  try {
    const { senha } = req.body;

    if (senha === process.env.ACCESS_PASSWORD) {
      console.log("Acesso permitido");
      return res.status(200).json({ message: "Acesso permitido", ok: true });
    } else {
      console.error("Acesso recusado");
      return res.status(500).json({ message: "Acesso recusado", ok: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error, ok: false });
  }
});

export default router;

const registerUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };

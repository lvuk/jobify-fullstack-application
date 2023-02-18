const errorMiddleware = (req, res, next, error) => {
  console.log(error);
  return res.status(500).json({ msg: 'There was an error' });
};

export default errorMiddleware;

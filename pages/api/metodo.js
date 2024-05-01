export default (req, res) => {
    res.status(200).json({
        medoto: req.method
    })
}
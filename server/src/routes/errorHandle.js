const ErrorHandle = (req, res) => {
    res.status(404).json(
        req.errors ? req.errors : "Undefined"
    )
}

export default ErrorHandle

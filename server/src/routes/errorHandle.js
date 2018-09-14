const ErrorHandle = (req, res) => {
    res.status(404).json({
        errors: req.errors ? req.errors : "Undefined"
    })
}

export default ErrorHandle

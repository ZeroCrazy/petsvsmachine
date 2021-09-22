

const resp = (res, status, result) => {
    res.status(status).json(result)
}

module.exports = {
    resp
}
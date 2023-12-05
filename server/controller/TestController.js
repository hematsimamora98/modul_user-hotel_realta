const testResponse = (req, res) => {
    return res.json({
        message: 'Hello world!',
    });
};


module.exports = { testResponse };
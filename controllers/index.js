displayName = (req, res) => {
    let data = 'OwenHeim DeMordor';
    res.status(200).send(data);
};

module.exports = {
    displayName,
};
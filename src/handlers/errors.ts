const errors = () => {
    return (err, req, res, next) => {
        console.error(err.message);

        res.status(500).send('Something went wrong. Please try again later');
    }
};

export default errors;
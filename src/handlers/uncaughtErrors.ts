const handlers = () => {
    process.on('uncaughtException', (error, req, res, next) => {
        console.log(error);

        res.status(500).send('Something went wrong. Please try again later');
    });

    process.on('unhandledRejection', (error, req, res, next) => {
        console.log(error);

        res.status(500).send('Something went wrong. Please try again later');
    });
}

export default handlers;
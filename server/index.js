module.exports = function Server(x) {
    var path = x.path,
        express = x.express,
        morgan = x.morgan,
        helmet = x.helmet;
    mongoose = x.mongoose;
    bodyParser = x.bodyParser;
    const start = function() {
        var port = x.config.env.PORT || 8080;

        const app = express();
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: true }));

        // parse application/json
        app.use(bodyParser.json());

        app.use(morgan('dev'));
        app.use(express.static(path.join(__dirname, '../public')));

        app.use('/truck', x.routes.truck);
        app.use('/user', x.routes.user);
        app.use('/driver', x.routes.driver);

        const server = app.listen(x.config.env.PORT, function() {
            console.info(x.util.format('The ' + x.config.APP_NAME + ' is running on port %d', port));
        });
        mongoose.connect(x.config.DB_URL, function(err) {
            if (err) {
                console.log('Could not connect to the database. Exiting now...');
                process.exit();
            } else {
                console.log("Successfully connected to the database");
            }
        });
    };

    return {
        start: start
    }
};
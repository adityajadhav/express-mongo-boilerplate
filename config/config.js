var config = {
    AppName: "MyApp",
    getDevelopmentConfig: function getDevelopmentConfig() {
        return {
            environment: 'development',
            port: 8080,
            mongoDB: {
                connString: 'mongodb://127.0.0.1:27017/MyDatabaseName',
                mongoPing: 300000,
            }
        };
    },
    getProductionConfig: function getProductionConfig() {
        return {
            environment: 'production',
            port: 8080,
            mongoDB: {
                connString: 'mongodb://ip:port/MyDatabaseName',
                mongoPing: 300000,
            }
        };
    },

};
module.exports = config;




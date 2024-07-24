const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Express API',
    description: 'Automatically generated Swagger documentation for Express API',
  },
  host: 'localhost:8000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/blogRoutes.js', './routes/userRoutes.js', './routes/TripRoutes.js', './routes/paymentRoutes.js', './routes/chatRoutes.js']; // Add paths to all your route files
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Generated swagger documentation');
});

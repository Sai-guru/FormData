const mongoose = require('mongoose');
//'Details' is the name of the database here
mongoose.connect('mongodb+srv://aa5940530:MainPassword123@clusterformdata.jkq0u77.mongodb.net/Details?retryWrites=true&w=majority&appName=ClusterFormData', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
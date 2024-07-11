const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rgovindraj77:melemadom@govind650.0mtvi9q.mongodb.net/?retryWrites=true&w=majority&appName=govind650').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is connected')
})
import mongoose from 'mongoose';


const Connection= async(user,pass)=>{
    try{
        const databaseUrl=`mongodb://${user}:${pass}@ac-iohvisv-shard-00-00.rh8uao3.mongodb.net:27017,ac-iohvisv-shard-00-01.rh8uao3.mongodb.net:27017,ac-iohvisv-shard-00-02.rh8uao3.mongodb.net:27017/?ssl=true&replicaSet=atlas-lbueo0-shard-0&authSource=admin&retryWrites=true&w=majority`;
        const connectionParams = {
            useNewUrlParser: true,

            useUnifiedTopology: true,
        };
        await mongoose.connect(databaseUrl, connectionParams );
        console.log("Database connection established");
    } catch(err){
        console.log("Error while connecting to the database: " + err);
    }
}

export default Connection; 
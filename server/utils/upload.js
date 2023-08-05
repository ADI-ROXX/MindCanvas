import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";
dotenv.config();

//ruhelaaditya70
//32z79gTzdKcmgWrV






//dbUser
//9PdRF16ghywB6yZk
const storage = new GridFsStorage(
    {
        url:"mongodb://dbUser:9PdRF16ghywB6yZk@ac-kuap2q2-shard-00-00.jooplmu.mongodb.net:27017,ac-kuap2q2-shard-00-01.jooplmu.mongodb.net:27017,ac-kuap2q2-shard-00-02.jooplmu.mongodb.net:27017/?ssl=true&replicaSet=atlas-93776s-shard-0&authSource=admin&retryWrites=true&w=majority",

        file: (request,file) => {
            
            const match=["image/jpg", "image/jpeg", "image/png"];
            console.log(file);
            if(match.indexOf(file.mimetype)===-1){
                return `${Date.now()}-blog-${file.originalname}`;
                
            }
        
            console.log("jhelladnakdsf");
            return {
                bucketName: "photos",
                filename:`${Date.now()}-blog-${file.originalname}`,
        
            };

                



        }
    }
    );



        

export default multer({storage});

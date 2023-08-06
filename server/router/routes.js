import express from 'express';
import { loginUser, signupUser, } from '../controller/user_controller.js';
import { DetailView } from '../controller/detailView.js';
const router = express.Router();

import submitPost from '../controller/createPost.js';
import { authenticate } from '../controller/jwt-authenticator.js';

import { seePosts } from '../controller/seePosts.js';
router.post('/signup',signupUser);  // whenever /signup is called and data is being sent by post,
                                    // signupUser function will be called

router.post('/login',loginUser); // whenever /login is called and data is being sent by post



router.post("/submit",authenticate,submitPost);
router.post("/seePosts",authenticate,seePosts); //

router.post("/detailView",DetailView);
export default router;
 
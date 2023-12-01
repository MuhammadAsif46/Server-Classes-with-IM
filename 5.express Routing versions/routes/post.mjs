import express  from "express";
import { nanoid } from "nanoid";
const router = express.Router();

// not recommended at all - server should be stateless :
let posts = [
    {
        id: nanoid(),
        title: "abc post title",
        text: "some post title"
    }
]
// POST    /api/v1/post
router.post("/post", (req, res) => {
    console.log('this is singup', new Date());

    if(!req.body.title || !req.body.text){
        res.status(403);
        res.send(`required parameters missing,
        example request body :
        {
            title: "abc post title",
            text: "some post title"
        }`);
        return;
    }

    posts.push({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text
    });
    res.send('post created');
});

// GET     /api/v1/posts
router.get("/posts", (req, res) => {
    console.log('this is singup', new Date());
    res.send(posts);
});

// GET     /api/v1/post/:postId
router.get("/post/:postId", (req, res) => {
    console.log('this is singup', new Date());

    for(let i = 0; i < posts.length; i++){
        if(posts[i].id === req.params.postId){
            res.send(posts[i]);
            return;
        }
    }

    res.send("post not found with id " , req.params.postId);
});

// GET     /api/v1/posts/:userId
// router.get("/posts/:userId", (req, res) => {
//     console.log('this is singup', new Date());
//     res.send('post created' + new Date());
// });

// PUT     /api/v1/post/:userId/:postId
router.put("/post/:userId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

// DELETE  /api/v1/post/:userId/:postId
router.delete("/post/:userId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});


export default router 
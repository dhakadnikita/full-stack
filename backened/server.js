import express from 'express';

const app = express();

app.use(express.static('dist'))

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
             id: 1, 
             title: "Skeleton Fight",
             content: "Why don't skeletons fight each other? They don't have the guts!" 
            },
        {
             id: 2, 
             title: "Scarecrow Award", 
             content: "Why did the scarecrow win an award? Because he was outstanding in his field!" 
            },
        { 
            id: 3,
            title: "Fake Spaghetti", 
            content: "What do you call fake spaghetti? An impasta!"
         },
        { 
            id: 4, 
            title: "Untrustworthy Atoms", 
            content: "Why don't scientists trust atoms? Because they make up everything!" 
        },
        { 
            id: 5, 
            title: "Cheese Joke", 
            content: "What do you call cheese that isn't yours? Nacho cheese!" 
        }
      ];
      
      res.send(jokes);
      
});



const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('Serve at http://localhost:${port}');

});
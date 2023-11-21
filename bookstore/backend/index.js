import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRout from "./routes/booksRout.js";
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response)=>{
	console.log(request);
	return response.status(234).send("Hello, world1");
});

app.use("/books", booksRout);


mongoose
	.connect(mongoDBURL)
		.then(()=>{
			console.log("Connected to Database");
			app.listen(PORT, ()=>{
				console.log(`Server is running on ${PORT}`);
			});
		})
		.catch((error)=>{
			console.log("Error: Not connected to Database");
		});
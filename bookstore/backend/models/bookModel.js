import mongoose from "mongoose";

// Define a bookSchema
const bookSchema = new mongoose.Schema(
	{
		title: { 
			type: String, 
			required: true 
		},
		author: { 
			type: String, 
			required: true 
		},
		publishYear: { 
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Create a model based on the schema
// this is going to be imported in another file
export const Book = mongoose.model('Book', bookSchema);
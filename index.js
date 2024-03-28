import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/api/products", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get("/api/products", async (req, res) => {
	try {
		const product = await Product.find({});
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect("mongodb+srv://sikakikiri:17ToRAWT2minDPi8@learn-nodejs.w32ij4n.mongodb.net/")
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(3001, () => {
			console.log("Server is running on port 3001");
		});
	})
	.catch(() => {
		console.log("Connection failed");
	});

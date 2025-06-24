const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS)
app.use(express.static("public"));

// Route to fetch a random cocktail
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktail = response.data.drinks[0];
        res.render("index", { cocktail });
    } catch (error) {
        console.error("Error fetching cocktail:", error);
        res.send("Error fetching cocktail. Try again later!");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


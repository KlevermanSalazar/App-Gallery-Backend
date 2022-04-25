if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");

// Port
const PORT = process.env.PORT || 5050;

// Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

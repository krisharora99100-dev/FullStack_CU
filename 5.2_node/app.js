const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect("mongodb+srv://krisharora99100_db_user:6Mip7BCIowioZ3VV@cluster0.gec3yib.mongodb.net/?appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("Connection failed:", err));

// --- Routes ---
app.use('/students', studentRoutes);

// --- Start Server ---
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

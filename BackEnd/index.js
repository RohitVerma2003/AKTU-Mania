const express = require("express");
const app = express();
require("dotenv").config();

const CourseRoutes = require("./routes/CourseRoutes");
const YearsRoutes = require("./routes/YearsRoutes");
const DataRoutes = require("./routes/DataRoutes");
const BranchRoutes = require("./routes/BranchRoutes");

const { dbConnect } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
app.use(express.json());
const cors = require("cors");

const PORT = process.env.PORT || 4000;

dbConnect();
cloudinaryConnect();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp"
    })
);

app.use("/api/v1/course" , CourseRoutes);
app.use("/api/v1/years" , YearsRoutes);
app.use("/api/v1/data" , DataRoutes);
app.use("/api/v1/branch" , BranchRoutes);

app.get("/", (request, response) => {
    return response.json({
        success: true,
        message: "Your Server Is Running..."
    });
});

app.listen(PORT, () => console.log(`App is listening at ${PORT}`));
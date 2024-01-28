import express from "express"
import request from "supertest"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

test("Test the root path", async () => {

    const response = await request(app).get("/")
    expect(response.statusCode).toBe(200)

})
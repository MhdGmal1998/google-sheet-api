import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv";
import cors from 'cors'
import bodyParser from 'body-parser'
const { GoogleSpreadsheet } = require('google-spreadsheet');
dotenv.config();

const server = async () => {
    const gConfig = async () => {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY,
        });
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0];
        const sheetLenght = doc.sheetCount;
        console.log(sheet.title);
        console.log(sheetLenght);
        console.log(sheet.rowCount);
    }
    gConfig()

    const PORT = process.env.SERVER_PORT || 8080
    const app = express()
    app.use(cors())
    app.use(express.json())

    app.listen(PORT, () => {
        console.log(`The server is running in ${PORT}`)
    })
}
server()
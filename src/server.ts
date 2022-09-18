import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv";
import cors from 'cors'
import bodyParser from 'body-parser'
import Gsheet from './types/index'
const { GoogleSpreadsheet } = require('google-spreadsheet');
dotenv.config();

const server = async () => {

    const gConfig = async () => {
        const doc = new GoogleSpreadsheet('1xJGYOFr8eaboSfNmgJ_H37iyQdJBmU2YmCj4BPN4b0o')
        await doc.useServiceAccountAuth(
            JSON.parse(JSON.stringify({
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6ZzhiE9FWk+Hm\nvnajkdJuyxiNTHAN1LYnu+enG6T7TeUkBqavg5Mf7/kic6uXxBH+UHnbAvdOqAIJ\nft8SQQ2cpIwTFTcWXXKzrMR4lhtocHDM+lKzQMj/wTHnqTWRuLgjQrSfHWssifiL\nTxxy7eWAtVl8DQG0/bnHvgTSge0JfZ+BAikFz+Gds8owP83GKlV8p73kZlJxKYJL\n4fNnmx3KkL9y7ZQE1SlmN/jdOGgDMDcFRtF73oK+3/TR9QPKZlsWR1XoakfVU9XG\nJHSt/LwMoJwnDqlnORYi03ZRM9lEE+w61XlRmce/LIOl0LBq6tKbJetiUjc53LIo\nD0w47eWbAgMBAAECggEAUZHv64NunStztKzub9/VLWS05shnVLYbzEF/OvJu/QX2\nWxCKCs5SKKyz4i6qDWzgzuBaosume4Yr9gnOBkfvc/fR0Fv9Uk0sb5IQHBDcB5UE\n175HSGf2TW02sICsj4s9ETkUn3iZONFbsWK6OVT/lJZHhXCPqatKjC0MIS54Eyll\nwbV0nFaGvfQMvnDRMFcK4tP1RHUulL3qoeH67hzGMI7bnTDWeNZ8XI2hO1ufr9ss\nLtUnbpxcEYi/5hNzhTZa3Ewucx60EHUHvbaTbXRVtEsMzjOm5eL/b0SHvyS4+kno\nqjWDzu6ic6fomn8ks/Q8GOjmazqehS+uKtdQ8RQqqQKBgQDiCbYQtYwExUxTf+v1\nckFyj9J3ZQAXW3owRVqwK00xubcNJ0rJSLofFjpkujT0St9649mDsGLaj2HjpN1p\nlGdvljubqDN9gE63l7y4SekSna9B5NL1SpJp23mM6kawVfybBvAgiaefBr3x/xLd\nOGLjDY2f6gnaPzVmwEyLQ4Fr1QKBgQDTHI7+1J2QMvSQ2QAFRVAghv5IScP7/l+j\n3U0Cu42Ai2Ht9YKSFz6VWX9KPDtZREzg2oxkY8BUoGLbB7tsUsaMkjOjwzdlTUDQ\n2q6HpQS3uAsPSKEdi6/4rWXmVZQHXeCXA9Wnb7jyRpluYSmcAS+7zjaMQacefLfZ\nj/hHQLLzrwKBgDXN+figPmQkUrbNjG0wdUO/2GlzMUJeFAfJenzU0ds0Sc5nu/WN\nyj/8Goo/iLtd1zR5aB1gryc3WiXF6K5pFPYK3MWAlEEbeaFaDSIQ9dnojv8waMba\nqV9pTtWsLodq8GY2kJIuMig4gp5ICUV/VoqVf1DBdPbudNewjofX2cbBAoGBAL+2\nkJkUhd3cmEIt/hnLPx+615LYAjWGZF4P6w6POcpBSXZqXN/EYh4Iv1Kv7gl7wAD2\nF0ZXW+K+H+feVrLhXNNtNZ4C+vxwsmq4HISsM+OPK+P+Renp360J8p7AmoQyGXGq\nlszN5XuG53DYpYu5fBqmAt1OBbDm+6KEXqh+NcSbAoGBAMXmG+PdCztv0ejGOPPk\nX6SM85Laas3ot03TWlbj7Pl24jMoJvwLDpSGcJmoQvZZHXY8jztiYY+cVmJDNkA2\nXU4n2U3z9U3uFlpkhpX6rcL/4n4XK7mxb9psLVKb8gug8kjqee/L99wGF9oG+fof\nqVVBY8tFeFZkz3QiEeapPNbL\n-----END PRIVATE KEY-----\n",
                "client_email": "sheet-app@healthy-feat-355312.iam.gserviceaccount.com",
            }))
        );
        await doc.loadInfo(); // loads document properties and worksheets
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
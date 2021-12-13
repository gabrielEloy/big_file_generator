const {selecteLineAmount, selectGeneratedData } = require('./config')
const fs = require('fs');
const get = require('lodash/get');
const faker = require('faker');

const createFileHeader = (fields, writeStreamRef) => {
    const fieldString = fields.join(',');

    writeStreamRef.write(`${fieldString}\n`);
}

const createFileData = (fields, lines, writeStreamRef) => {
    const fieldsGenerators = fields.map(field => get(faker,field));

    for(let i = 0; i < (lines - 1) ; i++) {
        const data = fieldsGenerators.map(field => field()).join(',');
        writeStreamRef.write(`${data}\n`)
    }
}


const createFile = async (linesAmount, fields) => {
    const writeStream = fs.createWriteStream('file.txt');
    createFileHeader(fields, writeStream);
    createFileData(fields, linesAmount, writeStream);
    writeStream.end();
}



const getCreatedFileSpec = async () => {
    const lines = await selecteLineAmount();
    const fields = await selectGeneratedData();

    return {
        lines,
        fields
    }
}


const handleCreatefile = async () => {
    console.time('file created in');
    const {lines, fields} = await getCreatedFileSpec();
    await createFile(lines,fields);
    console.timeEnd('file created in');
}

handleCreatefile();
# Big File Generator

<p align="center">
    <img height="300" src="https://media.giphy.com/media/IzyI9jLVqDvB6/giphy.gif">
</p>

While simulating operations with big files, I had some problems acquiring and generating such large files.
So I created  this basic helper to do so.

It uses [faker](https://github.com/marak/Faker.js/) to handle the fake data generation

## 1. How to use


### 1.1 Setup

Start by installing the project's dependencies using your package manager of choice.

If you are using yarn, you can use the following command:

```
yarn
```

and if you are using npm, you can use:

```
npm i
```


### 1.2 Running the project

Use the start script provided in the package.json, so you can use 


```
yarn start
```

or 

```
npm start
```


### 1.3 Using the script

Once you have runned the start script, You will have to specify the amount of lines you want in your generated file and afterwards you'll have to specify the data you'll want generated into it

After that the script will generate your file and will output it in a .txt called <span style="font-weight: bold">file.txt</span>
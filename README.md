# 📰 Stus-News-Web
Welcome to the GitHub repository for the Stu's News website! :D</br>
If you don't know what's going on here, this place hosts the source code that runs the website.
If you do, I'll try to make this README as useful as possible :)

## Contributing
If you have any ideas, find any errors, or would like to improve something, feel free to [submit an issue](https://github.com/DanielBdT-git/stus-news-web/issues/new) or [fork this repo](https://github.com/DanielBdT-git/stus-news-web/fork) and make a pull request. I'll do my best to keep in touch and maybe I'll merge your stuff :)</br>
###### please don't use AI though

## Uploading Stories
There are two main ways to upload a markdown story until I get the CMS up and running.</br>
Note that (as far as I know) you have to be a contributor to do these. If you aren't, you can [fork the repo](https://github.com/DanielBdT-git/stus-news-web/fork) and submit a pull request.
1. GitHub website
  - go to the [GitHub Repo](https://github.com/danielbdt-git/stus-news-web/tree/uploads)
  - make sure you're in the "**uploads**" branch
  - make a new `[WEEK]-[NUMBER]-[TITLE].md` file in `/src/pages/stories/`
  - fill in the "title", "author", "date" (DD-MM-YYYY), "image", and "credits" fields - leave `layout` as-is
  - commit your changes to "uploads"
2. Locally on your machine
  - in your terminal, [clone the repo](https://github.com/danielbdt-git/stus-news-web) and cd into it
  - checkout into the "**uploads**" branch: `git checkout uploads`
  - follow the same schema as in method 1
  - commit and push your changes to "uploads"
>[!important]
Remember to `git pull` before doing anything if you're using your terminal

## Development
The website is built with the [Astro framework](https://astro.build). You can read their docs [here](https://docs.astro.build).</br>
I'm also planning to use [Pages CMS](https://pagescms.org/) to make adding content super easy :)
|🧑‍💻 Command|Fuction|
|-------|-------|
|`npm install`|Install all dependencies|
|`npm run dev`|Start the live dev server|
|`npm run build`|Build the project into the `dist` folder|
|`npm run preview`|Preview what's in the `dist` folder|

## Tasks
|📋Item|Status|
|----|------|
|Initial Setup|🟢done|
|Basic Functionality|🟡working|
|Accessibility|🔴to do|
|Pages CMS|🔴to do|
|Mailing List|🔴to do|

# 📰 Stus-News-Web
Welcome to the GitHub repository for the Stu's News website! :D</br>
If you don't know what's going on here, this place hosts the source code that runs the website.
If you do, I'll try to make this README as useful as possible :)

## Contributing
If you have any ideas, find any errors, or would like to improve something, feel free to [submit an issue](https://github.com/DanielBdT-git/stus-news-web/issues/new) or [fork this repo](https://github.com/DanielBdT-git/stus-news-web/fork) and make a pull request. I'll do my best to keep in touch and maybe I'll merge your stuff :)</br>
###### please don't use AI though

## Uploading Stories
There are two ways to upload a Markdown story until I get the CMS is up and running.<br>

You need to be a contributor to use these. If you aren't, you can [fork the repo](https://github.com/DanielBdT-git/stus-news-web/fork) and submit a pull request.

1. GitHub website
    - go to the [GitHub Repo](https://github.com/danielbdt-git/stus-news-web/tree/uploads)
    - make sure you're in the "**uploads**" branch
    - navigate to `/src/pages/stories`
    - click "Add File"
    - name your file in the pattern `[WEEK]-[NUMBER]-[TITLE].md`, which looks something like `3-1-story-title.md`. All lowercase and hyphens instead of spaces.
    - paste the template below and fill in all the data *except "layout"*
        - `image.url` can take either a web link (which you obtain through "copy image link") **or** a file path relative from `/public`. For example, an image at `/public/uploads/image.webp` would have a url of `/uploads/image.webp`.
        - always fully remove any properties you're leaving blank
    - commit your changes to "uploads"
2. Locally on your machine
    - in your terminal, [clone the repo](https://github.com/danielbdt-git/stus-news-web) and cd into it
    - checkout into the "**uploads**" branch: `git checkout uploads`
    - follow the same schema as in method 1
    - commit and push your changes to "uploads"
>[!important]
Remember to `git pull` before doing anything if you're using your terminal

### Markdown Sample
```md
---
layout: "/src/layouts/StoryLayout.astro"
title: "Story Title"
author: "Author's Name"
date: YYYY-MM-DD
image:
  url: "https://example.com/image"
  alt: "Describe the image"
credits:
  image: "Where you got it / who took it"
  sources: ["https://source.com/article"]
---
This is where the actual story goes.
```

## Development
The website is built with the [Astro framework](https://astro.build). You can read their docs [here](https://docs.astro.build).</br>
I'm also planning to use [Pages CMS](https://pagescms.org/) to make adding content super easy :)

Here's a list of essential commands for development. Make sure you have nodejs and npm installed and that you're currently in the project directory (`.../stus-news-web`).
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
|Newsletter|🔴to do|
|Donations|🔴to do?|

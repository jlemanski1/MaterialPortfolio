<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
![Version][Version-Shield] ![Build Status][Netlify-Status-Shield] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<div align="center">
<a href="https://github.com/jlemanski1/MaterialPortfolio">
</a>
<h1 align="center">Portfolio Site</h1>
<p align="center">
Responsive one page portfolio site, with a functional material design. This website is meant to be a display of
my personal projects, open source contribution, professional experience, and skills in various tech stacks and domains.
<br />
<br />
<a href="https://jonol.tech"><strong>View Live Site</strong></a>
·
<a href="https://github.com/jlemanski1/MaterialPortfolio/issues">Report Bug</a>
</p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#about-the-project">About The Project</a>
<ul>
<li><a href="#built-with">Built With</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
</ul>
</li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>

</ol>
</details>

<!-- ABOUT THE PROJECT -->

##  About The Project

The latest version of this web site was built on a GatsbyJS starter that I had used a few years ago to quickly spin up a portfolio site. As a mobile developer by day, I've been somewhat removed from all the latest and greatest in the JS ecosystem, so I decided to stick with what I had and build off of that. I refactored the the project and abstracted everything into components, and implemented ButterCMS to make adding content a breeze. It's now much more easily extensible which will be great for when I add a blog at a later date.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

###  Built With
[![Gatsby-Shield]][Gatsby-url]  [![React][React.js]][React-url] Front-end Framework

[![SASS-Shield]][SASS-url] Styling

[![Netlify-Shield]][Netlify-url] Hosting and CI/CD


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

##  Getting Started
To get a local copy up and running follow these simple example steps.

### Codespace set up
1. Get an API Key at [https://buttercms.com](https://buttercms.com)

2. Add your API key to your github secrets with the key `BUTTER_CMS_API_KEY`

3. [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=master&repo=255473507&machine=basicLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)

4. Once `npm install` has finished running successfully, start the development server with `npm run develop`


### Local Setup

####  Prerequisites
**npm**
	```sh
	npm install npm@latest -g
	```

#### Set up
1. Get an API Key at [https://buttercms.com](https://buttercms.com)

2. Clone the repo and navigate to the directory
    ```sh
    git clone https://github.com/jlemanski1/MaterialPortfolio.git
    cd MaterialPortfolio
   ```

3. Install NPM packages
	```sh
	npm install
	```

4. Enter your ButterCMS API Key as an environment variable
	```sh
	echo 'BUTTER_CMS_API_KEY=<Your API Token>' >> .env
	```
	
5. Run development server
	```sh
	npm run develop
	```
6. (Optional) Build Project
	```sh
	npm run build
	```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

##  Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star if you like it or want to build off of it and make it your own! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

##  License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[Version-Shield]: https://img.shields.io/github/package-json/v/jlemanski1/MaterialPortfolio?style=for-the-badge
[Netlify-Status-Shield]: https://img.shields.io/netlify/dd08d2e4-9146-430f-b4af-4bf5e5a9181c?style=for-the-badge
[Gatsby-Shield]: https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white
[issues-shield]: https://img.shields.io/github/issues/jlemanski1/MaterialPortfolio.svg?style=for-the-badge
[issues-url]: https://github.com/jlemanski1/MaterialPortfolio/issues
[license-shield]: https://img.shields.io/github/license/jlemanski1/MaterialPortfolio?style=for-the-badge
[license-url]: https://github.com/jlemanski1/MaterialPortfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jono-lemanski/

[Gatsby-Shield]: https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white
[Gatsby-url]: https://www.gatsbyjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[SASS-Shield]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[SASS-url]: https://sass-lang.com/
[Netlify-Shield]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Netlify-url]: https://www.netlify.com/




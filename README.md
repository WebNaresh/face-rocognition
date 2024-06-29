# Create ReactMateWindVite App 

<img alt="Logo" align="right" src='https://raw.githubusercontent.com/WebNaresh/vite-react-app-mui-tailwindcss--integrate/c13d1d838d287cd986f48ddd11433be41523acf0/src/assets/my.svg' width="20%" />




Create ReactMateWindVite apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.

Create ReactMateWindVite App works on macOS, Windows, and Linux.<br>

## Quick Overview

```sh
npx create-ReactMateWindVite-app my-app
cd my-app
npm start
```

If you've previously installed `create-ReactMateWindVite-app` globally via `npm install -g create-ReactMateWindVite-app`, we recommend you uninstall the package using `npm uninstall -g create-ReactMateWindVite-app` or `yarn global remove create-ReactMateWindVite-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-ReactMateWindVite-app my-app
```
Op
_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init ReactMateWindVite-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create ReactMateWindVite-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── my.svg
└── src
    ├── assets
    │   └── my.svg
    ├── hooks
    │   └── useAppCookies.jsx
    │   └── useAppFunction.jsx
    │   └── useAppState.jsx
    ├── lib
    │   └── globalUseEffect.jsx
    ├── pages
    │   └── About
    │   │     └── components
    │   │     │       └── component1.jsx
    │   │     └── About.jsx
    │   └── Home
    │        └── components
    │        │       └── component1.jsx
    │        └── home.jsx
    ├── utils
    │   └── AppAlert
    │   │     └── AppAlert.jsx
    │   └── AppLoader
    │   │     └── AppLoader.jsx
    │   └── TopLoadingBar
    │   │     └── TopLoadingBar.jsx
    │   └── TopNav
    │        └── TopNav.jsx
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── route.jsx
    └── .env.local
    └── eslintrc.cjs
    └── .gitignore
    └── index.html
    └── package.json
    └── postcss.config.js
    └── README.md
    └── tailwind.cofig.js
    └── vite.cofig.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>


The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-ReactMateWindVite-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles ReactMateWindVite in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## User Guide

You can find detailed instructions on using Create ReactMateWindVite App and many tips in [its documentation](https://facebook.github.io/create-ReactMateWindVite-app/).

## How to Update to New Versions?

Please refer to the [User Guide](https://facebook.github.io/create-ReactMateWindVite-app/docs/updating-to-new-releases) for this and other information.

## Philosophy

- **One Dependency:** This library follows the philosophy of simplicity and ease of use. While it leverages powerful tools such as webpack, Babel, ESLint, and others behind the scenes, it presents users with a single, cohesive build dependency. This unified approach ensures a curated experience without overwhelming configurations.

- **No Configuration Required:** We believe in minimizing the hassle for developers. The library comes pre-configured for both development and production builds. You can dive straight into writing code without spending time on intricate setup details.

- **No Lock-In:** Your freedom is important. At any point, you can "eject" to a custom setup. With a single command, all configurations and build dependencies can be moved directly into your project. This flexibility allows you to tailor the environment to your needs, picking up right where you left off.

## What’s Included?

Your environment will have everything you need to build a modern single-page ReactMateWindVite app:

- ReactMateWindVite, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://facebook.github.io/create-ReactMateWindVite-app/docs/making-a-progressive-web-app) criteria. (_Note: Using the service worker is opt-in as of `ReactMateWindVite-scripts@2.0.0` and higher_)
- Hassle-free updates for the above tools with a single dependency.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://facebook.github.io/create-ReactMateWindVite-app/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.

## Popular Alternatives

Create ReactMateWindVite App is a great fit for:

- **Learning ReactMateWindVite** in a comfortable and feature-rich development environment.
- **Starting new single-page ReactMateWindVite applications.**
- **Creating examples** with ReactMateWindVite for your libraries and components.

Here are a few common cases where you might want to try something else:

- If you want to **try ReactMateWindVite** without hundreds of transitive build tool dependencies, consider [using a single HTML file or an online sandbox instead](https://Reactjs.org/docs/getting-started.html#try-ReactMateWindVite).

- If you need to **integrate ReactMateWindVite code with a server-side template framework** like Rails, Django or Symfony, or if you’re **not building a single-page app**, consider using [nwb](https://github.com/insin/nwb), or [Neutrino](https://neutrino.js.org/) which are more flexible. For Rails specifically, you can use [Rails Webpacker](https://github.com/rails/webpacker). For Symfony, try [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/Reactjs.html).

- If you need to **publish a ReactMateWindVite component**, [nwb](https://github.com/insin/nwb) can [also do this](https://github.com/insin/nwb#ReactMateWindVite-components-and-libraries), as well as [Neutrino's ReactMateWindVite-components preset](https://neutrino.js.org/packages/ReactMateWindVite-components/).

- If you want to do **server rendering** with ReactMateWindVite and Node.js, check out [Next.js](https://nextjs.org/) or [Razzle](https://github.com/jaredpalmer/razzle). Create ReactMateWindVite App is agnostic of the backend, and only produces static HTML/JS/CSS bundles.

- If your website is **mostly static** (for example, a portfolio or a blog), consider using [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/). Unlike Create ReactMateWindVite App, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.

- Finally, if you need **more customization**, check out [Neutrino](https://neutrino.js.org/) and its [ReactMateWindVite preset](https://neutrino.js.org/packages/ReactMateWindVite/).

## Contributing

We'd love to have your helping hand on `create-ReactMateWindVite-app`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Supporting Create ReactMateWindVite App

Create ReactMateWindVite App is a community maintained project and all contributors are volunteers. If you'd like to support the future development of Create ReactMateWindVite App then please consider donating to our [Open Collective](https://opencollective.com/create-ReactMateWindVite-app).


## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

- [@naresh](https://github.com/WebNaresh/)

## License

Create ReactMateWindVite App is open source software [licensed as MIT]. The Create ReactMateWindVite App logo is licensed under

<p align='center'>
  <img src='https://raw.githubusercontent.com/WebNaresh/vite-react-app-mui-tailwindcss--integrate/c13d1d838d287cd986f48ddd11433be41523acf0/src/assets/my.svg' style='width: 400px; border-radius: 10px;' alt='Build errors'>
</p>

## How to deply this App
## GitHub Actions Runner Deployment Guide

This guide provides step-by-step instructions for deploying a self-hosted GitHub Actions runner on an AWS EC2 instance. Additionally, it includes optional steps for deploying an NGINX server for frontend deployment and setting up SSL certificates with Certbot.

## 1. Create AWS EC2 Instance and Allocate Elastic IP

- Launch an EC2 instance on AWS.
- Allocate an Elastic IP and associate it with the EC2 instance.

## 2. Install Node.js and GitHub Actions Runner

```sh
sudo apt update
```
```sh
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```
```sh
sudo apt install nodejs
```
```sh
node --version
```



# Add the GitHub Actions Runner
```sh
./config.sh add --labels your-label-name
 Configure and Start the Self-Hosted Runner
```

cd actions-runner-directory

# Install the runner as a service
```sh
sudo ./svc.sh install
```
# Start the runner service
```sh
sudo ./svc.sh start
```

# Check the status of the runner
```sh
sudo ./svc.sh status
```
 Deploy NGINX for Frontend
 ```sh
sudo apt install nginx
```

# Edit NGINX configuration
```sh
sudo nano /etc/nginx/sites-available/default
```

# Paste the following file 
# NGINX Configuration
```sh
server {
    root /var/www/html;
    server_name aegis-qa.argantechnology.com www.aegis-qa.argantechnolog.com www.aeigs.mooo.com aeigs.mooo.com;

    location /api/ {
        proxy_pass http://localhost:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        root /home/ubuntu/actions-runner-backend-qa/_work/AEGIS-frontend/AEGIS-frontend;
        try_files $uri /index.html;
    }
}

```


# Lets consider i have sever on localhost:4000 
# that's why i written this code
```sh
 location /api/ {
        proxy_pass http://localhost:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
# you can remove it if you want (now deployment of backend is next step)
```sh
sudo npm i pm2 --global
```
```sh
sudo pm2 start npm  --name "backend-api-main" -- start
```
# other command of pm2 if you need
```
sudo npm i pm2 -g
sudo pm2 start index

# Other pm2 commands
sudo pm2 show app
sudo pm2 status
sudo pm2 restart app
sudo pm2 stop app
sudo pm2 logs (Show log stream)
sudo pm2 flush (Clear logs)

# To make sure app starts when reboot
sudo pm2 startup ubuntu
```
# Setup firewall

```sh
sudo ufw enable
sudo ufw status
sudo ufw allow ssh 
sudo ufw allow http 
sudo ufw allow https
```
## Add Path for nginx 
# then add you own path also 
```sh
sudo chmod +x /home/
sudo chmod +x /home/ubuntu
```

# Restart the nginx server after save
```sh
sudo service nginx restart
```
# Check the status of server after save
```sh
sudo service nginx status
```
# SSL certification with certbot python3
```sh
sudo add-apt-repository ppa:certbot/certbot
```
```sh
sudo apt-get install python3-certbot-nginx
```
```sh
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

# Only valid for 90 days, test the renewal process with
```sh
sudo certbot renew --dry-run
```
# To check ssl certificate of cerbot
```sh
sudo certbot certificates
```
# To delete existing certificate using cerbot
```sh
sudo certbot delete --cert-name your_domain
```

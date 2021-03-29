# Corona Statistic Website
This Website represents Corona Infection Statistics of Germany

# Get started
* You will need to install Node on your machine
* go to root directory where you want to store the app and type "npm install" for dependencies
* Change .env_sample to .env and paste your google geo chart API in there
* type "run npm start" to start the server
* The Website will be at http://localhost:XXXX (your port in .env)


## Developer Informations
npm install eslint --save-dev (devDependencies)


## Docker
Build command:
docker build -t alex/node-web-app .  

Run command:
docker run -p 9999:8080 -v /home/alex/AlexWebsite/Corona-Statistics-Website:/usr/src/app -d alex/node-web-app

Test123
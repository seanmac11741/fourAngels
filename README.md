# fourAngels
Website for FourAngels non profit

## To run in dev with bun: 
```
#bun build is not working, use webpack
bun build src/app.js --outdir ./public --watch 
#then spool up the ./public/index.html file with LiveServer 
# or launch firebase version for emulators 
#Run build in watch mode: https://firebase.google.com/docs/web/module-bundling
bun run build --watch
firebase serve 
```
## Deploy to firebase: 
```
#Run the build command
bun build src/app.js --outdir ./public
firebase deploy

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
```

## GitHub Actions: 
* Just push to the main branch and it will build and publish to firebase! 

## Todos: 
[ ] Publish to Domain
[x] Get more picturs 
[x] setup paralax scrolling on home page
[x] add pictures of board members 
[x] Check their FB page and get all the members and whatnot
[ ] Make the favicon image and add it
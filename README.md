# node-typescript

What to configure?

ts-dev-node to compile ts and watch file change.

eslint & prittier for coding standards 

Build:

Remove source map in prod build.

Docker:

User multi stage docker for smaller size images.


docker build -t dinesh/node-ts .

docker run -p 8001:8001 dinesh/node-ts
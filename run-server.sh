#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20.11.1
NODE_NO_WARNINGS=1 node --loader ts-node/esm --experimental-specifier-resolution=node src/server.ts

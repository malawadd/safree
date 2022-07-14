# safree
 a stepzen hackathon project

Safree is a web3-enabled short videos solution powered by stepzen api , lens protocol, and livepeer
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Uses Lens Protocol decentralized social graphs
- Allows users to create accounts, post, and comments.
- videos are hosted using Livepeer open video infrastructure.

## Tech

Safree uses a number of open source projects to work properly:

- [NextJS](https://nextjs.org/) - HTML enhanced for web apps!
- [Stepzen](https://stepzen.com/) - Awesome GraphQL backend service.
- [Lens Protocol](https://lens.xyz/garden) - Cutting edge decentralized social network protocol..
- [Livepeer](https://livepeer.studio/) - the world's open video infrastructure
- [Ethers](https://docs.ethers.io/v5/) - interacting with the Ethereum Blockchain and its ecosystem.
- [Apollo Client](https://www.apollographql.com/docs/react/) - fast state management library for GraphQl
- [dicebear Avatars](https://avatars.dicebear.com/) - A great Avatar library
- [chakra-ui](chakra-ui) - the component library we all love.


## Installation

Before installation make sure you have access to stepzen api, in addition to liverpeer api.
- [Getting-started with stepzen](https://stepzen.com/getting-started)
- [Getting-staterd with livepeer](https://docs.livepeer.studio/guides/livestreaming/api-key)


Install the dependencies and devDependencies

```sh
cd safree
npm i
npm run dev
```
create .env file and fill it

```sh
cp .env-example ~/.env
```

start the server.
 ```sh
npm run dev
```

![Haunted Cash Title Image](https://raw.githubusercontent.com/Haunted-Cash/hauntedcash-protocol/master/assets/bg.jpeg)

# Haunted Cash  Interface

This is front-end repository of the [haunted.cash](https://haunted.cash/).

## 💻 Set Up Environment

To begin, you need to install dependencies with Yarn.

```
 $ yarn
```

You should update **default provider URL** because our production provider URL is limited by CORS for security.
On `src/config.ts`, please replace it:

```diff
- defaultProvider: 'https://mainnet.infura.io/v3/OLD_PROVIDER_URL',
+ defaultProvider: 'https://mainnet.infura.io/v3/YOUR_PROVIDER_URL',
```

After it, you can launch the development server with following command.

```
 $ yarn start
```

## 👩‍🌾 If You Want to Bring Your Own Contract...

If you want to use different contract deployment on development,
please build [hauntedcash-protocol](https://github.com/Haunted-Cash/hauntedcash-protocol) and copy-n-paste 
the deployment information generated on `build/deployment.<network>.json` into this project's deployment directory,
which is `src/haunted-cash/deployments`.

Then, you need to change the deployment reference into yours. Suppose that the new deployment file is named `deployments.local.json`:

```diff
- deployments: require('./haunted-cash/deployments/deployments.mainnet.json'),
+ deployments: require('./haunted-cash/deployments/deployments.local.json'),
```

## ⚒ Contributions

Contributions are welcome! Since we don't have any contribution guide / issue templates yet,
please feel free to send PRs to the hauntedcash-frontend.

## LICENSE: MIT
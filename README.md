# TheGraphSample2

TheGraph 学習用のリポジトリです。

## イベントの情報を元に情報を集める。

## デプロイしたコントラクト(Avalanche Fuji testnet)

[0xa3fb6BDaEd02F22c5488e744a471C18784393881](https://testnet.snowtrace.io/address/0xa3fb6BDaEd02F22c5488e744a471C18784393881)

## デプロイしたコントラクト Version2 (Avalanche Fuji testnet)

- MyToken コントラクト

[0x40be105c9293548Bf9C6B47Ca91D0aA934c4dAE7](https://testnet.snowtrace.io/address/0x40be105c9293548Bf9C6B47Ca91D0aA934c4dAE7#code)

## デプロイしたコントラクト Version2 (Avalanche Fuji testnet)

- DNS コントラクト

[0xDA31aCa5eAE57FcA36ED109e71B8E407B348aB08](https://testnet.snowtrace.io/address/0xDA31aCa5eAE57FcA36ED109e71B8E407B348aB08#code)

## 既に存在するコントラクトを使って subgraph 用のプロダクトを作る場合

```bash
graph init \
    --product subgraph-studio
    --from-contract 0xa3fb6BDaEd02F22c5488e744a471C18784393881 \
    --network 43113 \
    --abi ./packages/frontend/src/contracts/MyToken.json \
    subgraph
```

## playground

[https://api.studio.thegraph.com/query/44992/subgraph2/v0.0.1](https://api.studio.thegraph.com/query/44992/subgraph2/v0.0.1)

## playground version2

[https://api.studio.thegraph.com/query/44992/subgraph2/v0.0.2](https://api.studio.thegraph.com/query/44992/subgraph2/v0.0.2)

## Sample Query

```graph
{
  tokenCreateds{
    id
    name
    symbol
  }
  balanceChangeds{
    id
    to
    balanceOf
  }
}
```

- result

```json
{
  "data": {
    "tokenCreateds": [
      {
        "id": "0xc0aa0d804cfc74f2c3ba454f2d23b18388ff47c7e1472b22bdaebbbc3a6cc38901000000",
        "name": "SocialIdentityToken",
        "symbol": "SIT"
      }
    ],
    "balanceChangeds": [
      {
        "id": "0x00f646976918eaa130eeb5dfb798cd280a764eab20132387c64c2013a19f836a01000000",
        "to": "0x1295bdc0c102eb105dc0198fdc193588fe66a1e4",
        "balanceOf": "100000"
      },
      {
        "id": "0x3f99afcd8e58a0052120b13c5799b3b038febef42b157dd4dafdda95c21bf9ef03000000",
        "to": "0x51908f598a5e0d8f1a3babfa6df76f9704dad072",
        "balanceOf": "10000000000000"
      }
    ],
    "registereds": []
  }
}
```

### yarn キャッシュをクリーンにする方法

```
yarn cache clean
```

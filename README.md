# TheGraphSample2
TheGraph学習用のリポジトリです。

## イベントの情報を元に情報を集める。

## デプロイしたコントラクト(Avalanche Fuji testnet)

[0xa3fb6BDaEd02F22c5488e744a471C18784393881](https://testnet.snowtrace.io/address/0xa3fb6BDaEd02F22c5488e744a471C18784393881)

## デプロイしたコントラクト Version2 (Avalanche Fuji testnet)

[0x40be105c9293548Bf9C6B47Ca91D0aA934c4dAE7](https://testnet.snowtrace.io/address/0x40be105c9293548Bf9C6B47Ca91D0aA934c4dAE7#code)

## デプロイしたコントラクト Version3 (Avalanche Fuji testnet)

## 既に存在するコントラクトを使ってsubgraph用のプロダクトを作る場合

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
query {
    transfers{
        id
        to
        transactionHash
        blockNumber
        blockTimestamp
    }
    tokenBalances(first: 10){
        id
        token{
            id
        }
        amount
    }
    tokenBalance(id: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072"){
        id
        amount
    }
}
```

- result

```json
{
  "data": {
    "transfers": [
      {
        "id": "0x6605e2982044b779764ecdbc1be9ec68b9ba7da8847ff2bccfc37736423f56f701000000",
        "to": "0x1295bdc0c102eb105dc0198fdc193588fe66a1e4",
        "transactionHash": "0x6605e2982044b779764ecdbc1be9ec68b9ba7da8847ff2bccfc37736423f56f7",
        "blockNumber": "20682251",
        "blockTimestamp": "1680782528"
      },
      {
        "id": "0xa3e053de94bb900b962b423d5670b1887c44c911cd4e838fc2c42aa2cbcea02100000000",
        "to": "0x51908f598a5e0d8f1a3babfa6df76f9704dad072",
        "transactionHash": "0xa3e053de94bb900b962b423d5670b1887c44c911cd4e838fc2c42aa2cbcea021",
        "blockNumber": "20682226",
        "blockTimestamp": "1680782475"
      }
    ],
    "tokenBalances": [],
    "tokenBalance": null
  }
}
```
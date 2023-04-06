# TheGraphSample2
TheGraph学習用のリポジトリです。

## デプロイしたコントラクト(Avalanche Fuji testnet)

[0xa3fb6BDaEd02F22c5488e744a471C18784393881](https://testnet.snowtrace.io/address/0xa3fb6BDaEd02F22c5488e744a471C18784393881)

## 既に存在するコントラクトを使ってsubgraph用のプロダクトを作る場合

```bash
graph init \
    --product subgraph-studio 
    --from-contract 0xa3fb6BDaEd02F22c5488e744a471C18784393881 \
    --network 43113 \
    --abi ./packages/frontend/src/contracts/MyToken.json \
    subgraph
```
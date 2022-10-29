## About

Lighthouse-CIのサーバーのbodyParserを上書きするためにExpressを使ってサーバーを構築したRepositoryです。  

以下のissueと同様の事象が発生したため、issue内に記載されているカスタムミドルウェアを使用する方法でやってみました。

- [Upload failed with Error: Unexpected status code 413](https://github.com/GoogleChrome/lighthouse-ci/issues/709)

## 使用方法

```bash
npm install

docker compose up -d

npm run start
```

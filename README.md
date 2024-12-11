# 環境

| ツール     | バージョン  | 確認方法         |
|------------|--------------|------------------|
| next       | 15.0.4       | npm list         |
| react      | 19.0.1       | npm list         |
| node       | v22.6.0      | node -v          |
| npm        | 10.8.2       | npm -v           |
| aws-cli    | 2.15.57      | aws --version    |
| python     | 3.12.8       | python --version |

# ローカル構築方法

1. リポジトリをクローンする
2. リポジトリのディレクトリに移動する
3. コンテナの起動

  ```bash
  docker-compose up -d
  ```

# 参考記事

- [Nextjs15導入の参考記事](https://nextjs.org/docs/app/getting-started/installation)
- [Dockerfileの参考記事](https://note.com/minato_kame/n/n04cbd62e4e6f)

# 実行したコマンド

```bash
npx create-next-app@latest --typescript
```

- 実行結果

  ```bash
  / # npx create-next-app@latest --typescript
  Need to install the following packages:
  create-next-app@15.0.4
  Ok to proceed? (y) y

  ✔ What is your project named? … next
  ✔ Would you like to use ESLint? … No / (Yes)
  ✔ Would you like to use Tailwind CSS? … No / (Yes)
  ✔ Would you like your code inside a `src/` directory? … No / (Yes)
  ✔ Would you like to use App Router? (recommended) … No / (Yes)
  ✔ Would you like to use Turbopack for next dev? … No / (Yes)
  ✔ Would you like to customize the import alias (@/* by default)? … (No) / Yes
  Creating a new Next.js app in /next.

  Using npm.

  Initializing project with template: app-tw 


  Installing dependencies:
  - react
  - react-dom
  - next

  Installing devDependencies:
  - typescript
  - @types/node
  - @types/react
  - @types/react-dom
  - postcss
  - tailwindcss
  - eslint
  - eslint-config-next

  npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
  npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
  npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
  npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
  npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

  added 373 packages, and audited 374 packages in 34s

  138 packages are looking for funding
    run `npm fund` for details

  found 0 vulnerabilities
  Success! Created next at /next
  ```


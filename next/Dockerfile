# ==================================================
# パッケージのインストールのレイヤー
# ==================================================
FROM node:22.6.0-alpine3.20 AS deps
WORKDIR /base

COPY package*.json ./
RUN npm ci

# ==================================================
# アプリのビルドレイヤー
# ==================================================
FROM node:22.6.0-alpine3.20 AS builder
WORKDIR /build

COPY --from=deps /base/node_modules ./node_modules
COPY . .

RUN npm run build

# ==================================================
# 開発環境用レイヤー
# ==================================================
FROM node:22.6.0-alpine3.20 AS development
WORKDIR /app

COPY --from=deps /base/node_modules ./node_modules
COPY . .

# 開発環境用の環境変数を設定
ENV NODE_ENV=development

CMD ["npm", "run", "dev", "--", "-p", "1285"]

# ==================================================
# 本番環境用レイヤー
# ==================================================
FROM node:22.6.0-alpine3.20 AS production
WORKDIR /app

COPY --from=builder /build/.next ./.next
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/next.config.* ./

# 本番環境用の環境変数を設定
ENV NODE_ENV=production

USER node
EXPOSE 1285

CMD ["npm", "start"]
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

COPY . /build
COPY package.json ./

# buildは、tsからjsに変換するのでこれがないとエラーになる
COPY tsconfig.json .

# nextのbuildの設定ルール
COPY next.config.* .

RUN npm run build

# ==================================================
# アプリの実行レイヤー
# ==================================================
FROM node:22.6.0-alpine3.20

WORKDIR /app

COPY --from=builder --chown=node:node /build/.next ./.next
COPY --from=builder --chown=node:node /build/node_modules ./node_modules
COPY --from=builder --chown=node:node /build/package.json ./package.json

ARG TOOL="curl unzip"

# AWS CLI v2のインストール
RUN apk upgrade && \
    apk add --no-cache \
        ${TOOL} \
        bash \
        aws-cli \
    && apk del ${TOOL}

USER node

EXPOSE 1285

CMD ["npm", "run", "dev", "--", "-p", "1285"]
# ---------- build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# 1️⃣ only copy manifests & lock, then install
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile               # or: npm ci

# 2️⃣ now copy the rest of the source (but never node_modules!)
COPY . .

# 3️⃣ make your Nuxt production bundle
RUN yarn build                                   # or: npm run build

# ---------- runtime stage ----------
FROM node:18-alpine
WORKDIR /app

# 4️⃣ copy the *compiled* output, not your whole repo
COPY --from=builder /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

# 使用 Node.js 16 作为基础镜像
FROM node:16

# 将当前工作目录设置为/app
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到 /app 目录下
COPY package*.json ./

# 运行 npm install 安装依赖
RUN npm install

# 将源代码复制到 /app 目录下
COPY . .

# 打包构建
RUN npm run build

# 将构建后的代码复制到 nginx 镜像中
FROM nginx:latest
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露容器的 8080 端口
EXPOSE 8080

# 启动 nginx 服务
CMD ["nginx", "-g", "daemon off;"]

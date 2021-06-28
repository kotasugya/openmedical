# React用
FROM node:14.15.1 as build-stage
ENV APP_ROOT /usr/src/app/frontend
WORKDIR $APP_ROOT
COPY package.json $APP_ROOT/package.json

RUN npm install
COPY . $APP_ROOT
RUN npm run build

# nginx用
FROM nginx:1.15.8
# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# Nginxの設定ファイルをコンテナにコピー
ADD nginx.conf /etc/nginx/conf.d/open_medical.conf
# COPY nginx.conf /etc/nginx/nginx.conf
# React資材の配置
RUN mkdir -p /var/log/nginx/log\
    && mkdir /home/www\
    && mkdir /home/www/html
COPY --from=build-stage /usr/src/app/frontend/build /home/www/html
# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf


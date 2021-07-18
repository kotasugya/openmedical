FROM ruby:2.7.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs 
RUN mkdir /open_medical
WORKDIR /open_medical
COPY Gemfile /open_medical/Gemfile
COPY Gemfile.lock /open_medical/Gemfile.lock

RUN bundle install
COPY . /open_medical

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
RUN mkdir -p tmp/sockets
VOLUME /app/public
VOLUME /app/tmp

# mariadb
# FROM mariadb

# RUN apt-get update
# RUN apt-get -y install locales-all

# ENV LANG ja_JP.UTF-8
# ENV LANGUAGE ja_JP:ja
# ENV LC_ALL ja_JP.UTF-8

# COPY mysqld_charset.cnf /etc/mysql/conf.d/mysqld_charset.cnf
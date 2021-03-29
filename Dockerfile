FROM ruby:2.7.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /open_medical
WORKDIR /open_medical
COPY Gemfile /open_medical/Gemfile
COPY Gemfile.lock /open_medical/Gemfile.lock
# RUN apt-get update -qq && apt-get install -y shared-mime-info
# RUN bundle update mimemagic nokogiri marcel
RUN bundle install
COPY . /open_medical

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
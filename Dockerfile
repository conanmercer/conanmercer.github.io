FROM jekyll/jekyll:3.8.6

# Copy Gemfile because sometimes the bundle version is different
# install the required bundler and install all the dependencies
COPY Gemfile* ./

RUN gem install bundler -v 2.4.13 && bundle install

ENTRYPOINT [ "jekyll" ]

CMD [ "build" ]
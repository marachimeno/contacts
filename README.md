# Agenda

Welcome to your new Agenda! In this App you can see all your contacts, create new ones, edit them and delete them.


## Usage
Download or clone this repo into your computer and navigate to the root directory `contacts`.
From there run the following commands:
```
rails db:create db:migrate             #get all you db up and running
rails db:seed                          #OPTIONAL - to get some contacts already setup
rails s                                #get the server running - navigate to http://localhost:3000/ and enjoy the app!
```

## Tech/Framework
This App was built using:
- **[Ruby 2.6.6](https://www.ruby-lang.org/en/)**
- **[Rails 6.0.4](https://rubyonrails.org/)**

## Tests
Used **[rspec-rails](https://github.com/rspec/rspec-rails)** for testing.
In order to run the test just type the following command in the terminal:
```
bundle exec rspec
```

## Code style
Currently using **[Rubocop](https://github.com/rubocop-hq/rubocop/blob/master/README.md)** for code formatting and code analysis (linter).
In order to use it:
- run the following command to see in which files there are style offenses:
```
rubocop
```

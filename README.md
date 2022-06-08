# README

## Getting Your Local Environment Ready
1. Setup local postgres database
- Install postgres via brew if not already installed.
- Check that postgres is running with `brew services`.
- Create a new db with `createdb thinking_of_development`.
- Start postgres command line with `psql`
- Check if the db was created by listing all of your databases with `\l`.
2. Setup test database for running tests against
- Repeat step 1 instructions but name your database `thinking_of_test` with `createdb thinking_of_test`.

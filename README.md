# pet-weather-cli
A command line interface for adding new pet and checking if your pet need an umbrella based on the weather where your pet locates.

## Clone pet-shelter-api project to your local
```
git clone https://github.com/mervinyan/pet-weather-cli.git
```
## Run the application on your local
```
cd pet-weather-cli
npm install
./bin/pet-weather help
./bin/pet-weather list --kind pet
./bin/pet-weather list -k pet
./bin/pet-weather list --kind type
./bin/pet-weather list -k type
./bin/pet-weather list --kind breed
./bin/pet-weather list -k breed
./bin/pet-weather umbreall --pet [pet_id]
./bin/pet-weather umbreall -p [pet_id]
./bin/pet-weather add --data [pet data] 
./bin/pet-weather add -d [pet data]
```

## Sample command to add a new pet
./bin/pet-weater add --data '{"name": "My Lovely Dog", "type": 1, "breed": 1, "location": "Vancouver, BC"}'


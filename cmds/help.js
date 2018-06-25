const menus = {
  main: ` 
    pet-weather [command] <options>

    list ................ list all your pets
    add ................. add new pet 
    umbrella ............ determine if an umbrella needed based on the current weather condition
    version ............. show outside app ersion
    help ................ show help menu for a command
  `,
  list: `
    pet-weather list <options>
    --kind, -k .......... pet | type | breed
  `,
  add: `
    pet-weather add <options>
    --name, -n ...........the name of the pet
    --type, -t .......... the type of the pet (1 -- Dog, 2 -- Cat)
    --breed, -b ........  the breed of the pet
    --location, -l ...... the place where the pet locates
  ` ,  
  umbrella: `
    pet-weather umbrella <options>
    --pet, -p ...... the id of the pet
  ` 
};

module.exports = (args) => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
}

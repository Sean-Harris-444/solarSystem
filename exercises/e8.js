import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let foundMoonName = data.planets
    .filter(moon => {
      return moon.moons !== undefined;
    })
    .find(moon2 => {
      // console.log(moon2.name);
      return moon2.moons.find(thisMoon => {
        // console.log(thisMoon);
        return thisMoon === moonName;
      });
    });
  let finalVar = foundMoonName.name;
  return finalVar;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

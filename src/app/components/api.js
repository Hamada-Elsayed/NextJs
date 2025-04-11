export default async function api (endpoint = "posts") {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
  const data = await response.json();
  return data;
}


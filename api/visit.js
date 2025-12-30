export default async function handler(request, response) {
  const apiResult = await fetch('https://api.counterapi.dev/v1/pasta-mania-yash/visits/up');
  const data = await apiResult.json();
  response.status(200).json(data);
}
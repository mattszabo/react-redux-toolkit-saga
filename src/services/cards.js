export const fetchCard = async () => {
  return await fetch('https://random-data-api.com/api/stripe/random_stripe')
  .then(response => response.json())
}
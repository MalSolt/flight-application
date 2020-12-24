export const requestFligths = async () => {
  const response = await fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/RU/SVO/JFK/anytime',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b70f5accc3msh09ea303fea872a2p10befejsn59cf36a6aa18',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    }
  )
  return response.json()
}

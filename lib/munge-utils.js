export function formatLocationIqData(data) {
  const array = data.map(item => {
    return {
      formatted_query: item.display_name,
      latitude: item.lat,
      longitude: item.lon
    };
  });

  return array[0];
}

export function formatWeatherBitData(data) {
  const array = data.data.map(item => {
    return {
      forecast: item.weather.description,
      time: item.datetime
    };
  });

  return array.slice(0, 2);
}

export function formatYelpData(data) {
  const array = data.businesses.map(item => {
    return {
      name: item.name, 
      image_url: item.image_url,
      price: item.price,
      rating: item.rating,
      url: item.url
    };
  });

  return array; 
}
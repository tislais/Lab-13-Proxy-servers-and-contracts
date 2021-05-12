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
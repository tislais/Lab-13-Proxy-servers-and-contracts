export function formatLocationIqData(data) {
  return data.map(item => {
    return {
      formatted_query: item.display_name,
      latitude: item.lat,
      longitude: item.lon
    };
  });
}
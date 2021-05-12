export function formatLocationIqData(data) {
  return data.map(item => {
    return {
      formatted_query: item[0].display_name,
      latitude: item[0].lat,
      longitude: item[0].lon
    };
  });
}
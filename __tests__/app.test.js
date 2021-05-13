import { locationIqData } from '../data/locationiq-data.js';
import { weatherBitData } from '../data/weatherbit-data.js';
import { yelpData } from '../data/yelp-data.js';
import { formatLocationIqData } from '../lib/munge-utils.js';
import { formatWeatherBitData } from '../lib/munge-utils.js';
import { formatYelpData } from '../lib/munge-utils.js';

describe('API Data Munging', () => {

  const expectedLocationIqData = {
    'formatted_query': 'Portland, Multnomah County, Oregon, USA',
    'latitude': '45.5202471',
    'longitude': '-122.6741949'
  };

  const expectedWeatherBitData = [
    {
      'forecast': 'Broken clouds',
      'time': '2021-05-12'
    },
    {
      'forecast': 'Few clouds',
      'time': '2021-05-13'
    }
  ];

  const expectedYelpData = {
    'name': 'Luc Lac',
    'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/azr6sD6VeJbdaiO2aKvSsw/o.jpg',
    'url': 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=1qFFdrJ3g3elqBsC-Mk8XA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1qFFdrJ3g3elqBsC-Mk8XA',
    'rating': 4.0,
    'price': '$$'
  };

  it('munges LocationIq data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocationIqData(locationIqData);

    // assert
    expect(output).toEqual(expectedLocationIqData);
  });

  it('munges WeatherBit data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatWeatherBitData(weatherBitData);

    // assert
    expect(output).toEqual(expectedWeatherBitData);
  });

  it('munges Yelp data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatYelpData(yelpData);

    // assert
    expect(output).toEqual(expectedYelpData);
  });

});
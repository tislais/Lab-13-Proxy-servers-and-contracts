import { locationIqData } from '../data/locationiq-data.js';
import { weatherBitData } from '../data/weatherbit-data.js';
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

  it('munges LocationIq data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocationIqData(locationIqData);

    // assert
    expect(output).toEqual(expectedLocationIqData);
  });

  it.only('munges WeatherBit data', async () => {
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
import { locationIqData } from '../data/locationiq-data.js';
import { formatLocationIqData } from '../lib/munge-utils.js';

describe('API Data Munging', () => {

  const expectedLocationIqData = {
    'formatted_query': 'Portland, Multnomah County, Oregon, USA',
    'latitude': '45.5202471',
    'longitude': '-122.6741949'
  };

  it('munges movie data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocationIqData(locationIqData);

    // assert
    expect(output).toEqual(expectedLocationIqData);
  });

});
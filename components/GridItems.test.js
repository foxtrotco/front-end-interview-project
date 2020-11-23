import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import GridItem from './GridItems';

afterEach(cleanup);
const data= {id:100, name:'Testing Wines', products:[{
    id:1,
    title: 'foo', 
    assets: [{'url':'https://d3lbhvavid9616.cloudfront.net/assets/products/54767/1599850348070.jpg'}]
},{
    id:2,
    title: 'bar',
    assets: [{'url':'https://d3lbhvavid9616.cloudfront.net/assets/products/54767/1599850348070.jpg'}]}

]};
it('View more will disappear when reaching max items', () => {
    const {queryByText} = render(
        <GridItem item= {data} amountToView= {1}/>,
    );

    expect(queryByText(/View More Products/i)).toBeTruthy();

    fireEvent.click(queryByText(/View More Products/i));

    expect(queryByText(/View More Products/i)).toBe(null);
});
import React, {Component} from 'react';
import {Table} from 'reactstrap';
const data = require('./data/trading-hours');

class Open extends Component {

    render() {

        let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        const dataWithOpen = data.map(item => {
            let tradingHours = item.tradingHours;
            let IsShowOpen = tradingHours.some(i => {
                let from = new Date(i.from);
                let to = new Date(i.to);
                from = from.toLocaleTimeString();
                to = to.toLocaleTimeString();
                return today >= from && today <= to
            });

            return {
                name: item.name,
                id: item.instrumentID,
                open: IsShowOpen,
            };


        });
        console.log(dataWithOpen);

        const dataWithFilters = dataWithOpen.filter(item => item.open === true);
        console.log('filtered', dataWithFilters);

        return(
            dataWithFilters.map((item) => {
            return (
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Open</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.open.toString()}</td>
                    </tr>
                    </tbody>
                </Table>);

        }))

    }
}

export default Open;






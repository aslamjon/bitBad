import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {head, last, get} from 'lodash';

const BarChartComponent = ({data}) => {
    const items = [{
        name: get(head(data, 'before_yesterday')), 
        order_count: get(head(data, 'before_yesterday_order_count')), 
        view_count: get(head(data, 'before_yesterday_order_count')) 
    }]
    items[0].order_count = 10;
    items[0].view_count = 15;
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={items}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="order_count" fill="#8884d8" />
                <Bar dataKey="view_count" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartComponent;

import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
        'Yellow',
        "Deaths"
	],
	datasets: [{
		data: [300, 50, 100, 88],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        "Red"
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        "red"
        ]      
	}]
};

function Graph () {
    return (
        <div>
           <Pie data={data} />
        </div>
    )
}

export default Graph 

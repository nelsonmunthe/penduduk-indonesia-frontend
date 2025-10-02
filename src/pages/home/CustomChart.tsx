import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useChartAgama from './useChartAgama';
import React from 'react';
import { Chart } from "../../interface/dashboard"

const CustomChart:React.FC<Chart> = ({type, description}) => {
    
    const {
        data,
        options,
    } = useChartAgama(type, description)
   
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
    );

    return(
        <div className='col-span-1 flex flex-col'>
            <Bar options={options} data={data} />          
        </div>
    )
}

export default CustomChart
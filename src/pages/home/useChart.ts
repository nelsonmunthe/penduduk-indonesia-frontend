import { useEffect, useState } from "react"
import { DataChart } from "../../interface/dashboard"
import { getChartByAgama, getChartByPekerjaan, getChartByPendidikan, getChartByPernikahan } from "../../apiCalls/dashboard"
import { randomBackgroundColor } from "../../utils/utils"

const useChart = (type: string, description: string) => {
    const [dataChart, setDataChart] = useState<DataChart[]>([])

    const fetchChartByPurchaseType = async() => {
        try {

            if(type === 'pendidikan') {
                const response = await getChartByPendidikan()
                if(response?.data?.success) {
                    setDataChart(response?.data?.data ?? [])
                }
            } else if(type === 'pernikahan') {
                const response = await getChartByPernikahan()
                if(response?.data?.success) {
                    setDataChart(response?.data?.data ?? [])
                }
            } else if(type === 'agama') {
                const response = await getChartByAgama()
                if(response?.data?.success) {
                    setDataChart(response?.data?.data ?? [])
                }
            } else {
                const response = await getChartByPekerjaan()
                if(response?.data?.success) {
                    setDataChart(response?.data?.data ?? [])
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchChartByPurchaseType()
    }, [])

    const options:any = {
        responsive: true,
        scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              ticks: {
                  callback: function(value: number) :string{
                      return value  + ' %';
                  }
              }
            },
          },
        plugins: {
          legend: {
            position: 'top' as const,
            display: false,
          },
          title: {
            display: true,
            text: description,
          }
        },
    };
          
    const data = {
        labels : dataChart.map(chart => chart.name),
        datasets: [
            {
                label: 'percentage',
                data: dataChart.map(item => item.percentage),
                backgroundColor: dataChart.map(_ => randomBackgroundColor()),
            },
        ],
    };

    return{
        data,
        options,
    }
}

export default useChart
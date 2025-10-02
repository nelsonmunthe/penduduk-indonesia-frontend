import { useState } from "react"
import ChartAgama from "./ChartAgama"
import { Chart } from "../../interface/dashboard"

const Home:React.FC = () => {
    const [charts, setCharts] = useState<Chart[]>([
        {
            type: 'pendidikan',
            description: 'Pendidikan Charts'
        },
        {
            type: 'pernikahan',
            description: 'Pernikahan Charts'
        },
        {
            type: 'pekerjaan',
            description: 'Pekerjaan Charts'
        },
        {
            type: 'agama',
            description: 'Agama Charts'
        }
    ])

    return(
        <div className='rows-span-1 grid grid-rows-1 md:grid-cols-2 gap-4'>
            {
                charts.map(item => {
                    return <ChartAgama type={item.type} description={item.description} />
                })
            }
        </div>
    )
}

export default Home
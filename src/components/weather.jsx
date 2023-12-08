
export default function RenderWeather(props) {
   
    
    return (
        <>
        {props.weatherReport.map((item, index)=>{
            return (
                <div key={index}>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                </div>
            )
        })}
        </>
    )
}
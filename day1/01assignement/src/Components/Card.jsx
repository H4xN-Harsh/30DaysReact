import "./Comp.css"
export default function Card(props){
    return(
        <div id="card">
            <div>
                <p>Name : {props.name}</p>
                <p>Marks : {props.marks}/100</p>
            </div>
            {
                props.marks<40?(
                    <div id="rank" className='fail'>
                        <h3>Fail</h3>
                    </div>
                ):(
                    <div id="rank" className='pass'>
                        <h3>Pass</h3>
                    </div>
                )
            }
            
        </div>
    )
}
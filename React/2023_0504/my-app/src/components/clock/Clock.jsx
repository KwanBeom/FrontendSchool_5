function Clock(){
    const d = new Date();
    return (
    <div style={{backgroundColor: "#000", textAlign: "left"}}>
        <h2 style={{color: "rgb(255,0,0)"}}>년 : {d.getFullYear()}</h2>
        <h2 style={{color: "#fff"}}>월/일 : {d.getMonth() < 10 ? '0' + (d.getMonth()+1) : d.getMonth()}/{d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}</h2>
        <h2 style={{color: "#fff"}}>시간 : {d.getHours()}시 {d.getMinutes()}분 {d.getSeconds()}초</h2>
    </div>
    )
}


export default Clock;
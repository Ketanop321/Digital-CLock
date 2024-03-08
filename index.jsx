import React,{useState,useEffect} from 'react'


function PractiseReact(){

    const [time,setTime] = useState(new Date())


    useEffect(() => {
        const interValidId = setInterval(() =>{
            setTime(new Date())
        },1000)

        return () =>{
            clearInterval(interValidId)
        }
    },[])


    function  formatTime(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridieam = hours >= 12 ? "PM":"AM"

        hours = hours % 12 || 12 

        return `${padZero(hours)}:${padZero(minutes)}: ${padZero(seconds)}: ${meridieam}`
    }


   function padZero(number){
    return (number < 10? "0": "") + number
   }




    return(
       <div>
        <div>
          <h2><span>{formatTime()}</span></h2>
              
        </div>
       </div>

    )
}

export default PractiseReact
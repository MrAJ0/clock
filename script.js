const curDay = document.getElementById("day");

      const getDaymonth = () => {
        const weekday = [
          "Sun",
          "Mon",
          "Tues",
          "Wed",
          "Thur",
          "Fri",
          "Sat",
        ];

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const dayMonth = new Date();
        let day = weekday[dayMonth.getDay()];
        let month = months[dayMonth.getMonth()];
        let date = dayMonth.getDate();
        let year = dayMonth.getFullYear();
        return (`${day} | ${date},${month} ${year}`)

      }

      curDay.innerHTML=getDaymonth()





      const hourEl = document.getElementById("hour");  
      
      
      const getTime = ()=>{
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let periods = "AM"
        

        if(hour>11){
            periods="PM"
            if(hour>12)hour-=12
        }
        if(sec<10){
          sec= "0" + sec
          
        }
        if(min<10){
          min= "0" + min
        }
        

        hourEl.innerHTML=(`${hour}:${min}:${sec} ${periods}`)
        // minEl.innerText=min
        // secEl.innerText=sec
        // ampmEl.innerText=periods

        
        setTimeout(()=>{
            getTime();
        },1000)
      }

      getTime()

      

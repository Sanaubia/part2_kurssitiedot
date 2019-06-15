import React from 'react'





const Course = ({ courses }) =>{
   
        /*
        const total = () => course.parts.reduce( (accumulator, currentValue) => {
        console.log('what is happening', accumulator , currentValue)
        console.log('what is happening', parts.exercises)
       
        return currentValue + accumulator
        })
        */
        
      /*
        const total = () =>  course.parts.reduce((exercises, currentValue) =>{
        console.log("" , exercises, currentValue)
        let x = 8
        return  exercises + currentValue, 0
        })
        */

      //  const total = courses.parts.reduce((c , n) => c + n)


        //const total = array.reduce()


        /*
        
        
        
        const rows = () =>  courses.parts.map(course =>
        <li key={course.id}> 
        {courses.name} {courses.exercises}          
        </li>
        )
                       <p>
                {rows()}
                <li> {'Yhteensä '}{total()}{' tehtävää'} </li>
         
                </p> 

                
     
    */
   /*
        const total = () =>  courses.map(courses =>

        {courses.parts.map( parts => 
                parts.exercises ).reduce( (a, b) => a + b, 0 )
        })
      */
        
        const total = () => courses.map(courses => 
                
                {courses.parts.map ( parts =>
                        
                        parts.exercises) .reduce( (a, b) => a + b, 0 )
                        })
                        
                
        //const total = () => courses.parts.map( parts => parts.exercises ).reduce( (a, b) => a + b, 0 )
                
        const rows = () =>  courses.map(courses =>
                
                <div key={courses.id}>
                <h1>{courses.name}</h1>
                {courses.parts.map(parts => 
                        
                        <p key={parts.id}>{parts.name} {parts.exercises}</p>
                      
                        )
                        }  {'Total of '}
                          {courses.parts.map ( parts =>
                              
                         parts.exercises) .reduce( (a, b) => a + b, 0 ) 
                        } {'exercises'}
                <div>
               
                </div>
                
                </div>
                )

   
                        

                    
        return(
        <>
        <h1>Web development curriculum</h1>
        {rows()}
    
 
        {console.log(courses)}
       
        {console.log(total())}



        
    
        </>
        )

}

export default Course
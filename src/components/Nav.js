import React from 'react'


//EMEMANKA CHINEDU
// SPOTIFY UI - PROJECT





function Nav() {
    return (
        <div className="navBar">

        


        <div className="logo">


        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvRhd0VO7PPVPqFPJU5YizbzS9zNvmDfCsg&usqp=CAU" alt="spotify">
        
        
        </img>



        </div>

        <ul>

        <li className="active">

        {/* <img src="https://icon-library.com/images/home-icon-app/home-icon-app-20.jpg" alt="home"/> */}
            
            
            
            Home</li>

<li>Search</li>

<li>Your Library</li>


        </ul>

        <div className="cookies">


            <span>Cookies</span>
            <span>Privacy Policy</span>





        </div>

       




        </div>
    )
}

export default Nav

import React from "react";

function SignIn() {

  return (
    <a href="#accountMenu" className="AccountBox postings"
    id="account">
      <span className="UserWrapper">
        <span className="UserCircle" fill="#fff" size="30">
          <div className="User">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path d="M14.063 14.856c0 1.097.181 1.455.708 1.871.251.197 1.659.607 2.834.865 1.958.536 2.36 2 2.36 2A10.932 10.932 0 
              0112 23a10.935 10.935 0 01-7.966-3.408s.315-1.352 2.406-2c1.144-.354 2.435-.639 2.713-.838.538-.385.784-.767.784-1.913 
              0-.26-.217-.516-.49-1.037-.46-.878-1.159-2.101-1.159-3.601S8.558 5.58 12 5.552c3.442-.028 3.711 3.265 3.74 4.708.029 
              1.443-.688 2.669-1.132 3.51-.29.551-.545.82-.545 1.086zm7.77 2.267l-.648-.394a9.874 9.874 0 
              001.436-5.133c0-5.64-4.752-10.217-10.621-10.217-5.869 0-10.62 4.577-10.62 10.217 0 1.832.5 3.591 1.439 5.138l-.649.394a10.624 
              10.624 0 01-1.55-5.532C.62 5.53 5.719.62 12 .62c6.282 0 11.38 4.91 11.38 10.974a10.633 10.633 0 01-1.547 5.528z"></path>
            </svg>
          </div>
        </span>
      </span>
      <span className="SignIn">Sign in</span>
    </a>
  )
}

export default SignIn;
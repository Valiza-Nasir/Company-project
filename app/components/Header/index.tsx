function Header() {
  return (
    <div className="w-full">
      {/* Top Dark Brown Bar */}      
      {/* Main Navigation Bar */}
      <div className="bg-white px-4 lg:px-8 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Left Side - Logo and Company Name */}
          <div className="flex items-center space-x-4">
            {/* Orange Hexagonal Logo */}
            <div className="relative w-12 h-12">
            logo
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className="text-orange-500 font-bold text-xl uppercase tracking-wide">Company Name</span>
              {/* <span className="text-orange-500 font-bold text-xl uppercase tracking-wide">LANKA</span> */}
            </div>
          </div>
          
          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/start" className="text-textColor font-regular text-font_18">
              How to start
            </a>
            <div className="flex items-center space-x-1 text-textColor font-regular text-font_18 cursor-pointer">
              <a href="/services" className="text-textColor font-regular text-font_18">
              Services
            </a>   
                       {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg> */}
            </div>
            <div className="flex items-center space-x-1 text-textColor font-regular text-font_18 cursor-pointer">
              <a href="/technologies" className="text-textColor font-regular text-font_18">
              Technologies
            </a>
              {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg> */}
            </div>
            <a href="/career" className="text-textColor font-regular text-font_18">
              Careers
            </a>
          </div>
          
          {/* Right Side - CTA Button and Contact Link */}
          <div className="flex items-center space-x-6">
            {/* BUILD A TEAM Button */}
            <button className="bg-white border-4 border-textColor text-textColor px-6 py-3 rounded-lg font-font_18 font-semiBold  hover:bg-indigo-900 hover:text-white transition-colors flex items-center space-x-2">
              <span>BUILD A TEAM</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Contact us Link */}
            <a href="/contact" className="text-textColor font-regular text-font_18">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
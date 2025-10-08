import logo from "../../../public/assests/images/logoss.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Contact Information */}
          <div className="lg:col-span-1">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4 mb-6">
              {/* Orange Hexagonal Logo */}
              <div className="">
              <Image src={logo} alt="logo" width={150} height={150} />
              </div>
              
            </div>
            
            {/* Tagline */}
            <p className="text-textColor text-font_18 font-regular mb-6 leading-relaxed">
              Expertly trained, battle-tested, elite software developers on demand
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-textColor" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-textColor text-font_18 font-regular">+94 713249222</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-textColor"  fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-textColor text-font_18 font-regular">hello@courtney.lk</span>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-textColor mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="text-textColor text-font_18 font-regular">
                  <div>Courtney Lanka (Private) Limited</div>
                  <div>Level 35</div>
                  <div>World Trade Center</div>
                  <div>Colombo 01</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-textColor font-semiBold text-font_18 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">About Us</a></li>
              <li><a href="/success-stories" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Success Stories</a></li>
              <li><a href="/privacy-policy" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Privacy Policy</a></li>
              <li><a href="/terms" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Terms & Conditions</a></li>
              <li><a href="/contact" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Services Links */}
          <div>
            <h3 className="text-textColor font-semiBold text-font_18 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/hire-permanent" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Hire Permanent Staff</a></li>
              <li><a href="/staff-augmentation" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Staff Augmentation</a></li>
              <li><a href="/software-outsourcing" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Software Outsourcing</a></li>
              <li><a href="/build-remote-office" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Build Remote Office</a></li>
            </ul>
          </div>
          
          {/* Column 4: How to Start Links */}
          <div>
            <h3 className="text-textColor font-semiBold text-font_18 mb-4">How to Start</h3>
            <ul className="space-y-3">
              <li><a href="/you-asked" className="text-textColor text-font_18 font-regular  ">You Asked</a></li>
              <li><a href="/we-proceed" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">We Proceed</a></li>
              <li><a href="/negotiate" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">Negotiate</a></li>
              <li><a href="/you-get" className="text-textColor text-font_18 font-regular hover:text-orange-500 ">You Get</a></li>
            </ul>
          </div>
        </div>
        
        {/* Follow Us Section */}
        <div className="mb-8">
          <h3 className="text-textColor font-semiBold text-font_18 mb-4">Follow us</h3>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/courtney-lanka" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="https://facebook.com/courtneylanka" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com/courtneylanka" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="https://twitter.com/courtneylanka" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="https://youtube.com/courtneylanka" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="border-t border-gray-200 pt-6">
          {/* Copyright */}
          <div className="text-start">
            <p className="text-textColor text-font_18 font-regular">© 2022 courtney</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

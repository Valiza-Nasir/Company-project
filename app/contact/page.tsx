
"use client";

import HeroImage from "../components/common/heroImage";
import CommonParagraph from "../components/common/paragraph";
import Title from "../components/common/title";
import type { FormProps } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Contact() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <HeroImage
        title="Contact"
        description="We specialize in helping you build a team of expert developers."
      />
      <div className="max-w-[1600px] mx-auto">
        <Title title="Get in touch" />
        <div className="w-[45%] mt-6 mb-24">
          <CommonParagraph paragraph="Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible." />
        </div>

        <div className="flex  relative">
          <div className="flex ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221829.73572777456!2d72.5662896!3d29.68818125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1759720351252!5m2!1sen!2sfr"
            width="900"
            height="800"
            loading="lazy"
          ></iframe>
           <div className=" flex  lg:items-center  items-start rounded-3xl bg-white absolute top-[5%] left-[50%]
      ">
        <div className="p-6 md:p-8 rounded-4xl  ">
          {/* Form Header */}
          <h2 className="text-font_46 font-semiBold text-textColor mb-6 text-start">
            Connect With Your Next Great Hire Today!
          </h2>
          
          <Form
            // {...formItemLayout} // Apply the updated layout
            name="contact_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            // Use 'default' layout to place labels above inputs naturally
            layout="vertical" 
          >
            {/* Row 1: Company and Your Name */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Form.Item<FieldType>
                name="companyName"
                label={<span className="font-semiBold text-font_16 text-textColor">Company</span>}
                className="flex-1 mb-0 w-full" // flex-1 makes it take half the row
                rules={[{ required: true, message: "Please enter your company name." }]}
              >
                {/* Ant Design Input with Placeholder, matching the image */}
                <Input placeholder="Enter Company Name" className="h-14" />
              </Form.Item>

              <Form.Item<FieldType>
                name="yourName"
                label={<span className="font-semiBold text-font_16 text-textColor">Your Name</span>}
                className="flex-1 mb-0"
                rules={[{ required: true, message: "Please enter your name." }]}
              >
                <Input placeholder="Enter Your Name" className="h-14" />
              </Form.Item>
            </div>
            
            {/* Row 2: Phone Number and Email */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Form.Item<FieldType>
                name="phoneNumber"
                label={<span className="font-semiBold text-font_16 text-textColor">Phone Number</span>}
                className="flex-1 mb-0"
                rules={[{ required: true, message: "Please enter your phone number." }]}
              >
                <Input placeholder="Enter Phone Number" className="h-14" />
              </Form.Item>

              <Form.Item<FieldType>
                name="emailAddress"
                label={<span className="font-semiBold text-font_16 text-textColor">Email</span>}
                className="flex-1 mb-0"
                rules={[{ required: true, type: 'email', message: "Please enter a valid email." }]}
              >
                <Input placeholder="Enter Email Address" className="h-14" />
              </Form.Item>
            </div>

            {/* Row 3: Project Detail (Textarea) */}
            <Form.Item<FieldType>
              name="projectDetails  "
              label={<span className="font-semiBold text-font_16 text-textColor">Project Detail</span>}
              // Added margin to separate it visually as in the image
              className="mt-4" 
              rules={[{ required: true, message: "Please describe your project." }]}
            >
              {/* Using Ant Design TextArea for a multi-line input */}
              <Input.TextArea 
                placeholder="Enter Project Details" 
                rows={4} // Adjust height
                className="h-14"
              />
            </Form.Item>

            {/* Checkbox and Privacy Policy Link */}
            <Form.Item<FieldType> 
                name="privacyPolicy" 
              valuePropName="checked" 
              // Removed label and used Ant Design's wrapperCol for alignment
              wrapperCol={{ span: 24 }}
            >
              <Checkbox className="text-font_16 text-textColor font-regular">
                By sending this form I confirm that I have read and accept the{" "}
                <a href="/privacy-policy" className="text-font_16 text-textColor font-semiBold">
                  Privacy Policy
                </a>
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item 
              wrapperCol={{ span: 24 }} 
              className="mt-6"
            >
              <Button 
                type="primary" 
                htmlType="submit"
                className="w-[300px] h-[54px] bg-gradient-to-r from-orange to-yellow text-white font-semiBold text-font_16"
              >
                GET CONSULTATION 
                <span className="ml-2"> &gt; </span> 
              </Button>
            </Form.Item>
          </Form>
        </div>
    </div>
          </div>
          
        </div>

        <div className="grid grid-cols-3 gap-16 my-24">
        <div className="flex flex-col">
          <span>logo</span>
          <h3 className="my-2 text-textColor font-regular text-font_24">Office</h3>
          <span className="text-textColor font-regular text-font_18">info@courtney.lk</span>
          <span className="text-textColor font-regular text-font_18">+94 011 283 744</span>
          </div>   
          <div className="flex flex-col">
          <span>logo</span>
          <h3 className=" text-textColor font-regular text-font_24">Vishwa Liyanapathirana</h3>
          <p className="text-textColor text-font_16 font-semiBold my-2">Human Resources</p>
          <span className="text-textColor font-regular text-font_18">vishwa@courtney.lk</span>
          <span className="text-textColor font-regular text-font_18">+94 713 249 222</span>
          </div>   
          <div className="flex flex-col">
          <span>logo</span>
          <h3 className=" text-textColor font-regular text-font_24">Kasun Perera</h3>
          <p className="text-textColor text-font_16 font-semiBold my-2">Funder/CEO</p>
          <span className="text-textColor font-regular text-font_18">kasun@courtney.lk</span>
          <span className="text-textColor font-regular text-font_18">+44 532 82820 9292</span>
          </div>          

        </div>

        <div className="mb-8">
          <h3 className="text-textColor font-semiBold text-font_46 mb-4">Follow us</h3>
          <div className="flex space-x-8">
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
      </div>
    </div>
  );
}

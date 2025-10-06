"use client";

import Image from "next/image";
import image from "../../../public/assests/images/contact-form.jpg";
import type { FormProps } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function ContactForm() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
  

    <div className="flex  relative w-[1600px] mx-auto my-12" >
    <div className="flex ">
      <div
        className=" flex w-[50%] lg:items-center  items-start rounded-3xl bg-white absolute top-[4%] left-[40%] h-auto 
"
      >
        <div className="p-6 md:p-8 rounded-4xl w-[80%]">
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
      <div >
      <Image src={image} alt="hero-image"className="rounded-3xl h-[800px] w-[800px]" />

      </div>
     
    </div>
  </div>


  );
}

export default ContactForm;

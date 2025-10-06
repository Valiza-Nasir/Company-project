    
import { Input } from "antd";
import { InputProps } from "antd";

function CommonInput({placeholder, ...props}:InputProps) {
  return (
        <div>
            <Input  type="text" placeholder={placeholder} {...props} className="w-full" />
        </div>
  )
}

export default CommonInput
import { Button, ButtonProps } from "antd";

function CommonButton({children, ...props}:ButtonProps) {
  return (
    <div>
        <Button {...props} className="w-full">
            {children}
        </Button>
    </div>
  )
}

export default CommonButton
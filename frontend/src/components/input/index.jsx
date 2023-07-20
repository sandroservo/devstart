import { forwardRef } from "react";
import { Form, Icon } from "react-bulma-components";

// eslint-disable-next-line
const InputComponent = forwardRef(({ label, icon, error, typeError, ...props }, ref) => {
    return (
        <Form.Field>
            <Form.Label>{label}</Form.Label>
            <Form.Control>
                <Form.Input {...props} ref={ref} />
                {icon && (
                    <Icon align="left" size="small" >
                        <i className={icon} />
                    </Icon>
                )}

            </Form.Control>
            <Form.Help color={typeError}>{error}</Form.Help>
        </Form.Field>
    )
}
)

export default InputComponent;
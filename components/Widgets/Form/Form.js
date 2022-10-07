import React from "react";
import { Controller } from "react-hook-form";
import { FormField, Label } from "./form.style";

export const TextField = React.forwardRef(
  ({ label, type, name, control, onChange, className, error }, ref) => {
    return (
      <FormField>
        <Label className="text-sm md:text-base">{label.toUpperCase()}</Label>
        {type === "textarea" && (
          <textarea name={name} id={name} onChange={onChange} ref={ref} />
        )}
        {["email", "text", "number", "file", "phone"].includes(type) &&
          (type === "number" ? (
            <Controller
              name={name}
              render={({ field: { onChange } }) => (
                <input
                  type={type}
                  onChange={e => onChange(parseInt(e.target.value, 10))}
                />
              )}
              control={control}
            />
          ) : (
            <input
              type={type}
              name={name}
              id={name}
              onChange={onChange}
              ref={ref}
              className={className}
            />
          ))}
      </FormField>
    );
  }
);

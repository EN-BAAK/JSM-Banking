import React from 'react';
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { FieldValues } from 'react-hook-form';


const CustomInput = <T extends FieldValues>({ form, name, label, placeholder, type = "text" }: CustomInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
                className="input-call"
                type={type}
                {...field}
              />
            </FormControl>

            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;

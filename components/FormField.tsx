<<<<<<< HEAD
import { Controller, Control, FieldValues, Path } from "react-hook-form";

=======
import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848
import {
  FormItem,
  FormLabel,
  FormControl,
<<<<<<< HEAD
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
=======
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
<<<<<<< HEAD
  type?: "text" | "email" | "password";
=======
  type?: 'text' | 'email' | 'password' | 'file';
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
<<<<<<< HEAD
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input
              className="input"
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
=======
  type = 'text',
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input className='input' placeholder={placeholder} type={type} {...field} />
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />
);
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848

export default FormField;

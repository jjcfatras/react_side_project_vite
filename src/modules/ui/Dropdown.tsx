import type { Dispatch, SetStateAction } from "react";

import { countryCode } from "@modules/news";

import {
  type FormProps,
  type LabelProps,
  type OptionProps,
  type SelectProps,
  Form,
  Label,
  Option,
  Select,
} from "./primitives";

export interface DropdownProps<T> {
  formProps?: FormProps;
  label?: string;
  labelProps?: LabelProps;
  onChange: Dispatch<SetStateAction<T>>;
  optionProps?: OptionProps;
  selectProps?: SelectProps;
  value: T;
}

export const Dropdown = <T extends SelectProps["value"]>({
  formProps,
  label,
  labelProps,
  onChange,
  optionProps,
  selectProps,
  value,
}: DropdownProps<T>) => (
  <Form display="flex" flexDirection="column" {...formProps}>
    {label ? <Label {...labelProps}>{label}</Label> : null}
    <Select
      onChange={(e) => {
        onChange(e.target.value as T);
      }}
      value={value}
      {...selectProps}
    >
      {Object.keys(countryCode).map((code) => (
        <Option key={code} value={code} {...optionProps}>
          {code}
        </Option>
      ))}
    </Select>
  </Form>
);

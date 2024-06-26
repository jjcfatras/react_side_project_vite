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
  labelProps?: LabelProps;
  optionProps?: OptionProps;
  selectProps?: SelectProps;
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
  label?: string;
}

export const Dropdown = <T extends SelectProps["value"]>({
  formProps,
  labelProps,
  optionProps,
  selectProps,
  value,
  onChange,
  label,
}: DropdownProps<T>) => (
  <Form display="flex" flexDirection="column" {...formProps}>
    {label ? <Label {...labelProps}>{label}</Label> : null}
    <Select
      value={value}
      onChange={(e) => {
        onChange(e.target.value as T);
      }}
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

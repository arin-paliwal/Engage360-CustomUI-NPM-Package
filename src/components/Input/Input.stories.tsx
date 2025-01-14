import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Input",
  component: Input,
  tags: ["Input", "Component"],
  parameters: {
    controls: { layout: "centered" },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    type: "text",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter password...",
    type: "password",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter email...",
    type: "email",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};

export const Number: Story = {
  args: {
    placeholder: "Enter number...",
    type: "number",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};

export const Date: Story = {
  args: {
    placeholder: "Enter date...",
    type: "date",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};



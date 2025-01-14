import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["Button", "Component"],
  parameters: {
    controls: { layout: "centered" },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Clickable: Story = {
  args: {
    children: "Clickable Button",
    variant: "primary",
    onClick: () => alert("Button Clicked"),
  },
};

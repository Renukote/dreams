// import React from "react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { TextField, TextFieldProps } from "./TextField";

// describe("TextField", () => {
//   const mockOnChange = jest.fn();
//   const renderTextField = (additionalProps?: Partial<TextFieldProps>) => {
//     const defaultProps: TextFieldProps = {
//       label: "Test Label",
//       name: "testInput",
//       type: "text",
//       value: "",
//       onChange: mockOnChange,
//       errorText: "This is an error",
//       additionalInputClassNames: "extraClass"
//     };

//     return render(<TextField {...defaultProps} {...additionalProps} />);
//   };

//   it("renders the text field", () => {
//     renderTextField();
//     expect(screen.getByRole("textbox")).toBeInTheDocument();
//   });

//   it("renders with given label", () => {
//     renderTextField();
//     expect(screen.getByText("Test Label")).toBeInTheDocument();
//   });

//   it("calls onChange when text is entered", () => {
//     renderTextField();
//     userEvent.type(screen.getByRole("textbox"), "new value");
//     expect(mockOnChange).toBeCalled();
//   });

//   it("displays error text when provided", () => {
//     renderTextField();
//     expect(screen.getByText("This is an error")).toHaveClass("show-helper-text");
//   });

//   it("applies additional class names to input", () => {
//     renderTextField();
//     expect(screen.getByRole("textbox")).toHaveClass("extraClass");
//   });

//   it("renders input with correct className", () => {
//     renderTextField();
//     expect(screen.getByRole("textbox")).toHaveClass("inputField");
//   });
// });

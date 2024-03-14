import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import TenureSelect from "./components/TenureSelect";

beforeEach(() => {
    jest.resetAllMocks();
});

afterEach(() => {
    cleanup();
});

test("renders learn react link", async () => {
    render(<TenureSelect />);

    //confirm default value
    const selectLabel = /Tenure/i;
    const selectEl = await screen.findByLabelText(selectLabel);
    expect(selectEl).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery component", () => {
  it("should render in the DOM", async () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render list of images when the imageUrls array is passed", () => {
    const imageUrls: string[] = [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", `${url}`);
    });
  });
});

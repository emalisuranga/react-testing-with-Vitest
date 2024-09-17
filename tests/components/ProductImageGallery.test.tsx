import { it, expect, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import ProductImageGallery from '../../src/components/ProductImageGallery';


describe('ProductImageGallery', () => {
    it('should render no users when no users are provided', () => { 
        const { container } = render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement();
    });
    it('should render a list of images', () => { 
        const imageUrls = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'];
        const { container } = render(<ProductImageGallery imageUrls={imageUrls} />)

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(imageUrls.length);
        expect(images[0]).toHaveAttribute('src', imageUrls[0]);
    });
})
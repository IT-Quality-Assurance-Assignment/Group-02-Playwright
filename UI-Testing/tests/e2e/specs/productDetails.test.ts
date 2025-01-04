import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventory.page';
import { ProductPage } from '../pages/product.page';
import { login } from '../helpers/loginHelper';

test.describe('Product Details', () => {
  test('should display correct product details', async ({ page }) => {
    await login(page);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigate();
    
    const productPage = new ProductPage(page);
    const firstItemName = await inventoryPage.getFirstItemName();
    
    // Click product name and wait for navigation
    await productPage.clickProductName(firstItemName);
    
    // Verify we're on the details page
    const isOnDetailsPage = await productPage.isOnProductDetailsPage();
    expect(isOnDetailsPage).toBeTruthy();
    
    const details = await productPage.getProductDetails();
    expect(details).toMatchObject({
      name: expect.any(String),
      description: expect.any(String),
      price: expect.any(String),
    });
  });
}); 
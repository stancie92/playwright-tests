import { test, expect } from '@playwright/test';

test('CI - celowo błędny test', async () => {
  expect(2 + 2).toBe(5);
});
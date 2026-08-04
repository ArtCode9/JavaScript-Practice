// src/compare.js

const { readExcel } = require('./excel');
const { readCSV } = require('./csv');

async function compare(csvFile, excelFile) {
  const siteProducts = await readCSV(csvFile);
  const accountingProducts = readExcel(excelFile);

  // ساخت Map برای سرعت بالا
  const excelMap = new Map();

  accountingProducts.forEach(item => {
    const sku = String(item.SKU || '').trim();

    if (!sku) return;

    excelMap.set(sku, {
      price: item.Price ?? '',
      stock: item.Stock ?? ''
    });
  });

  let matched = 0;
  let priceUpdated = 0;
  let stockUpdated = 0;
  let missing = 0;

  siteProducts.forEach(product => {
    const sku = String(product['SKU'] || '').trim();

    if (!excelMap.has(sku)) {
      missing++;
      return;
    }

    matched++;

    const excel = excelMap.get(sku);

    // آپدیت قیمت
    if (String(product['Regular price']) !== String(excel.price)) {
      product['Regular price'] = excel.price;
      priceUpdated++;
    }

    // آپدیت موجودی
    if (String(product['Stock quantity']) !== String(excel.stock)) {
      product['Stock quantity'] = excel.stock;
      stockUpdated++;
    }
  });

  return {
    rows: siteProducts,
    stats: {
      products: siteProducts.length,
      matched,
      priceUpdated,
      stockUpdated,
      missing
    }
  };
}

module.exports = {
  compare
};
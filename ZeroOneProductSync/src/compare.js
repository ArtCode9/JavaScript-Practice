function compareProducts(csvProducts, excelProducts) {

    const excelMap = {};

    let matched = 0;
    let updated = 0;
    let missing = 0;

    // ساخت Map از اکسل
    excelProducts.forEach(item => {

        const sku = String(item["کد کالا"]).trim();

        if (!sku) return;

        excelMap[sku] = {
            price: item["قیمت"],
            stock: item["موجودی"]
        };

    });

    // بروزرسانی CSV
    csvProducts.forEach(product => {

        const sku = String(product["SKU"]).trim();

        if (excelMap[sku]) {

            product["Regular price"] = excelMap[sku].price;
            product["stock quantity"] = excelMap[sku].stock;

            matched++;
            updated++;

        } else {

            missing++;

        }

    });

    return {

        products: csvProducts,
        matched,
        updated,
        missing

    };

}

module.exports = {
    compareProducts
};
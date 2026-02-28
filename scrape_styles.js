const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.prestigeconstructions.com/', { waitUntil: 'networkidle2' });

    await page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight / 2);
    });

    await new Promise(r => setTimeout(r, 2000));

    const data = await page.evaluate(() => {
        const item = document.querySelector('.projects-location-items-index');
        if (!item) return { error: 'Item not found' };

        const h4 = item.querySelector('h4');
        const span = item.querySelector('span');
        const link = item.querySelector('.projects-location-view-all');

        return {
            itemClass: item.className,
            itemHtml: item.outerHTML,
            itemStyles: {
                padding: window.getComputedStyle(item).padding,
                borderBottom: window.getComputedStyle(item).borderBottom,
                display: window.getComputedStyle(item).display,
                flexDirection: window.getComputedStyle(item).flexDirection
            },
            h4Styles: h4 ? {
                fontSize: window.getComputedStyle(h4).fontSize,
                fontWeight: window.getComputedStyle(h4).fontWeight,
                color: window.getComputedStyle(h4).color,
                marginBottom: window.getComputedStyle(h4).marginBottom
            } : null,
            spanStyles: span ? {
                fontSize: window.getComputedStyle(span).fontSize,
                color: window.getComputedStyle(span).color
            } : null,
            linkStyles: link ? {
                display: window.getComputedStyle(link).display,
                position: window.getComputedStyle(link).position,
                right: window.getComputedStyle(link).right
            } : null
        };
    });

    fs.writeFileSync('operational_styles.json', JSON.stringify(data, null, 2));
    await browser.close();
    console.log('Saved to operational_styles.json');
})();

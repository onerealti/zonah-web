const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    try {
        await page.goto('https://www.prestigeconstructions.com/', { waitUntil: 'domcontentloaded' });

        // Wait a bit just in case
        await new Promise(r => setTimeout(r, 2000));

        const styles = await page.evaluate(() => {
            const el = document.querySelector('.js-scroll.fade-in-bottom');
            if (!el) return null;

            const compStyles = window.getComputedStyle(el);
            return {
                base: {
                    transition: compStyles.transition,
                    opacity: compStyles.opacity,
                    transform: compStyles.transform,
                    transitionDuration: compStyles.transitionDuration,
                    transitionTimingFunction: compStyles.transitionTimingFunction,
                    transitionProperty: compStyles.transitionProperty,
                }
            };
        });

        // Scroll so elements get .scrolled class
        await page.evaluate(() => window.scrollBy(0, 500));
        await new Promise(r => setTimeout(r, 1000));

        const scrolledStyles = await page.evaluate(() => {
            const el = document.querySelector('.js-scroll.fade-in-bottom.scrolled');
            if (!el) return null;

            const compStyles = window.getComputedStyle(el);
            return {
                scrolled: {
                    transition: compStyles.transition,
                    opacity: compStyles.opacity,
                    transform: compStyles.transform,
                    transitionDuration: compStyles.transitionDuration,
                    transitionTimingFunction: compStyles.transitionTimingFunction,
                    transitionProperty: compStyles.transitionProperty,
                }
            };
        });

        console.log("BASE:");
        console.log(JSON.stringify(styles, null, 2));
        console.log("SCROLLED:");
        console.log(JSON.stringify(scrolledStyles, null, 2));

    } catch (err) {
        console.error(err);
    }
    await browser.close();
})();

export class HtmlHelper {

    static computeStyleDiff(elementA: HTMLElement, elementB: HTMLElement): any {
        if (!elementA || !elementB) {
            return undefined;
        }

        const styleA = getComputedStyle(elementA);
        const styleB = getComputedStyle(elementB);

        let styleDiff: any = {};

        if (styleA && styleB) {
            const diffPropertyKeys = Object.keys(styleA).filter((k: any) => styleA[k] !== styleB[k]);

            diffPropertyKeys.forEach((key: any) => {
                styleDiff[key] = styleB[key]
            });
        }

        return styleDiff;
    }
}
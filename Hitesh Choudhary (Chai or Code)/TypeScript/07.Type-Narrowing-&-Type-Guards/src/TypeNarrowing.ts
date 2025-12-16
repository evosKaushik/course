function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    }
    return `Chai oder: ${kind}`
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return 'Serving default masala chai'
}

function orderChai(size: 'small' | 'medium' | 'large' | number): string {
    if (size === "small") {
        return `small cutting chai....`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }
    return `chai order #${size}`
}

class KulhadChai {
    serve() {
        return 'Serving kulhad chai'
    }
}
class Cutting {
    serve() {
        return 'Serving cutting chai'
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving default masala chai`
}

type MasalaChai = { type: 'masala', spiceLevel: number };
type GingerChai = { type: 'ginger', spiceLevel: string };
type ElaichiChai = { type: 'elaichi', spiceLevel: string };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}`
    }
}

function isStringArray(arr:unknown):arr is string[]{
    
}
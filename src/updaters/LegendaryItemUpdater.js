export class LegendaryItemUpdater {
    matchesType(item) {
        return item.name === 'Sulfuras, Hand of Ragnaros';
    }

    updateItem(item) {
        return item;
    }
}
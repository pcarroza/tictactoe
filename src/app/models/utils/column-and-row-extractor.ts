export class ColumnAndRowExtractor {

    private indexInitial: number = 11;

    private indexFinal: number = 14;

    extractRow(coordinate: string): number {
        return this.extract(coordinate, 0);
    }
    extractColumn(coordinate: string): number {
        return this.extract(coordinate, 2);
    }

    extract(coordinate: string, index: number): number {
        let number = coordinate.substring(this.indexInitial, this.indexFinal);
        return Number(number[index]);
    }
}

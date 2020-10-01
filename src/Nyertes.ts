import fs from "fs";
export default class Nyertes {
    private _név: string = "";
    private _tipp: string = "";
    private _fordulo: string = "";
    private asd: string[] = [];
    constructor(forrás: string) {
        try {
            this.asd = fs.readFileSync(forrás).toString().split("\n");
        } catch (error) {
            console.log(`Hiba: ${(error as Error).message}`);
        }
        for (let i = 0; i < this.asd.length; i++) {
            const aktSor: string = this.asd[i].trim(); // Vezérlő karkterek levágása \r, ha windows sorvég
            const m: string[] = aktSor.split(" ");
            switch (i) {
                case 0:
                    this._fordulo = m[m.length - 1];
                    break;
                case 1:
                    this._tipp = m[m.length - 1];
                    break;
                case 2:
                    this._név = m[m.length - 1];
                    break;
                default:
                    break;
            }
        }
    }
    public get adatok(): string[] {
        const all: string[] = [this._név, this._fordulo, this._tipp];
        return all;
    }
}

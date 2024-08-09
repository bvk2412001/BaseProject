const { ccclass, property } = cc._decorator;

@ccclass
export default class ToolArray extends cc.Component {
    public static AddItemArray(array: any[], item: any): void {
        if (array == null) array = [];
        array.push(item);
    };


    public static GetItemInArray(array: any[], itemName: string): any {
        let prefab = array.filter(n => n.name === itemName)[0];
        return prefab;
    }

    public static DeleteItemInArray(array: any[], item: any): void {
        let index = array.indexOf(item);
        array.splice(index, 1);
    }
}

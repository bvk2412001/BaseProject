import { AutoComponent } from "../Common/AutoComponent";
import ToolArray from "../Common/Tools/ToolArray";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class Spawn extends AutoComponent {
    @property(cc.Node)
    prefabs: cc.Node[] = [];

    @property(cc.Node)
    pools: cc.Node[] = [];

    protected LoadComponents(): void {
        this.LoadPrefab();
    }

    protected LoadPrefab(): void {
        this.prefabs = this.node.getChildByName("Prefabs").children;
    }


    protected SpawnPrefab(namePrefab: string): cc.Node {
        let prefab: cc.Node = this.GetPrefabByName(namePrefab);
        if (prefab == null) return null;
        return prefab;
    }


    protected GetPrefabByName(name: string): cc.Node {
        let prefab = this.prefabs.filter(n => n.name === name)[0];
        return prefab;
    }


    protected AddPool(node: cc.Node): void {
        ToolArray.AddItemArray(this.pools, node);
    }

    protected GetPool(nodeName: string): cc.Node {
        if (this.pools.length == 0) return null;

        let prefab = ToolArray.GetItemInArray(this.pools, nodeName);
        ToolArray.DeleteItemInArray(this.pools, nodeName);
        return prefab;
    }

}

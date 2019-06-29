
/**
 * 接口
 */
interface  LabelledValue {
    label: string;
}
function printLabel(labelledObj : LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label:'hahhaha'};
printLabel(myObj);

//可选属性
interface SquareConfig {
    color? : string;
    width? : number;
}

function createSquare(config:SquareConfig): {color:string; area:number} {
    let newSquare = {color: "white", area:100}
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

createSquare({color:'red'})

//只读属性
//readonly x:number 类似const的效果,不同是const只对值类型有效
//readonly对引用类型的属性值也不能改变
interface config1 {
    readonly x : object
}

let p : config1 = {x:{name:'ddd'}}
// p.x.name = 'dddsd'

let a1: number[] = [1,2,3];
let ro: ReadonlyArray<number> = a1;
a1 = ro as number[];

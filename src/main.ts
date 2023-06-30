const a = 5;
const b = 6;

function add(a: number, b: number) {
    console.log(a + b);
}

add(a, b);

interface Student {
    name?: string,
    age?: number,
    id?: number
}
interface GradStudent extends Student {
    major?: string
}
interface Employee extends GradStudent {
    greet(): void
}

let Toan: GradStudent = {name: "Toan Nguyen", id: 397};
Toan.age = 31;
Toan.name = "Toan";
Toan.major = "IT"
Toan.id = 263;
console.log(Toan.name);

const NganVoTrachNhiem = (age: number, name: string, id: number): Employee => {
    const greet =():void => {
        console.log("vua ngu vua vo trach nhiem");
    }
    return {age, name, id, greet};
}
console.log(NganVoTrachNhiem(26,"ngu",23).greet());
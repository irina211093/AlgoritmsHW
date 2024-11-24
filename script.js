

class DynamicArray {

    constructor() {
        this.array = new Array(1);
        this.count = 0;
        this.size = 1; 
    }
}

// add(data), remove(), growSize()- сделать эти методы отдельными функциями которые работают с этим массивом

function add(dynamicArray, data) {
    if (dynamicArray.count === dynamicArray.size) {
        growSize(dynamicArray); 
    }
    dynamicArray.array[dynamicArray.count] = data; 
    dynamicArray.count++; 
}

function growSize(dynamicArray) {
    dynamicArray.size *= 2; 
    const newArray = new Array(dynamicArray.size); 
    for (let i = 0; i < dynamicArray.count; i++) {
        newArray[i] = dynamicArray.array[i];
    }
    dynamicArray.array = newArray; 
}

function remove(dynamicArray) {
    if (dynamicArray.count === 0) {
        console.log("Array is empty, nothing to remove.");
        return;
    }
    dynamicArray.array[dynamicArray.count - 1] = undefined; 
    dynamicArray.count--; 
}

function display(dynamicArray) {
    console.log(
        "Dynamic Array:",
        dynamicArray.array.slice(0, dynamicArray.count).join(", ")
    );
}

const dynamicArray = new DynamicArray();

add(dynamicArray, 10);
add(dynamicArray, 20);
add(dynamicArray, 30);
display(dynamicArray); 

remove(dynamicArray);
display(dynamicArray); 

add(dynamicArray, 40);
add(dynamicArray, 50);
add(dynamicArray, 60);
display(dynamicArray); 
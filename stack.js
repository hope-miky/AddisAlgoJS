class Stack {
    constructor(size) {
        this.top = -1;
        this.temp = 0;
        this.source = [];
    }

    pop() {
        if (this.top >= 0) {
            this.temp = this.source[this.top];
            this.top--;
            this.source.pop();
        } else {
            console.log("Stack is Empty");
        }
        return this.temp;
    }
    push(val) {
        this.source.push(val);
        this.top++;
    }

    printvals() {
        for (let i = 0; i < this.source.length; i++) {
            console.log(this.source[i]);
        }
    }

    currentVal() {
        return this.source[this.top]
    }
}


const st = new Stack();
st.push(1);

st.push(2);

st.push(3);


//st.printvals();

st.pop();

st.pop();



st.printvals();
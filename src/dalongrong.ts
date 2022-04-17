class MyApp {
    static BASE_URL = "https://baidu.com"
    constructor(public name:string,public age:number){
        this.age=age;
        this.name=name;
    }
    static mydemo(){
        return this.BASE_URL;
    }
    login():string{
        return `${this.age}-----${this.name}`
    }
}
export default MyApp
export {
    MyApp
}